require('dotenv').config();
const express = require('express');
const axios = require('axios');
const app = express();
const jwt = require('jsonwebtoken');
const passport = require('passport');
const bcrypt = require('bcrypt')
const LocalStrategry = require('passport-local').Strategy;

const cors = require('cors');

app.use(cors());

const bodyParser = require('body-parser');

app.use(bodyParser.json());
const User = require('./user.js');
const Plant = require('./plant.js');


/**User related Server Calls */
app.get('/', function (req, res) {
    console.log("GET request for homepage");
    res.send('Hello World from the homepage');
})
app.get('/users', (req, res) => {
    //res.send('Accesing user data');
    User.findAll().then(result => {
        //console.log(result);
        res.send(JSON.stringify(result));
    });
})
app.get('/user', async (req, res) => {
    try {
        const userInfo = await User.find(req.user['username']);
        res.json(userInfo)
    }
    catch (e) {
        console.log(e);
    }
})


app.post('/login', async (req, res) => {
    try {
        //console.log(req.params);
        const { username, password } = req.body;
        const user = await User.find(username);
        console.log('user', user);
        if (user) {
            const authenticated = bcrypt.compare(password, user['password']);
            if (authenticated) {
                const currentUser = {
                    username: user['username'],
                }
                const accessToken = jwt.sign(currentUser, process.env.AUTH_TOKEN_SECRET);
                //res.json({ accessToken: accessToken, username: username });
                res.json({ username: user['username'] });
            }
        }
    }
    catch (e) {
        res.status(404).send('Could not find username with that password');
    }

})

app.post('/signup', async (req, res) => {
    try {
        const { first, last, email, phone, username, password } = req.body;
        console.log(req.body);
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create(first, last, email, phone, username, hashedPassword);
        console.log(user);
        if (user.status == 'success') {
            res.send(user)
        } else if (user.code == '23505') {
            res.status(409).send('This username already exists');
        } else {
            res.status(500).send('A server error has occured');
        }
    } catch (e) {
        console.log(e);
        res.send(e);
    }
})

app.put('/users', (req, res) => {
    User.update(req.body.username, req.body.password, { zip: req.body.zip }).then(result => {
        {
            res.send(result);
        }
    })

})


/**Plant Related Server Calls */

app.post('/plants', async (req, res) => {
    const { api_id, custom, name, notes } = req.body;
    const plant = await Plant.create(api_id, custom, name, notes);
    res.send(plant);
})
app.post('/plants/:username', async (req, res) => {
    const { api_id, name, custom, water_rate } = req.body;
    const { username } = req.params;
    const user_plant = await Plant.createConnection(username, api_id, name, custom, water_rate);
    res.send(user_plant);
})

app.get('/plants/:username', async (req, res) => {
    const { username } = req.params;
    const connections = await Plant.findConnections(username);
    res.send(connections);
});
app.post('/getPlants', async (req, res) => {
    const plant_ids = req.body['plant_ids'];
    const plant = await Plant.findAll(plant_ids);
    res.send(plant);

})

/*Weather Related API CALLS */

app.get('/weather/:zip', async (req, res) => {
    try {
        const result = await axios({
            method: 'get',
            url: 'https://api.openweathermap.org/data/2.5/weather',
            params: {
                appid: process.env.WEATHER_API_KEY,
                zip: req.params.zip,
            }

        })
        res.json(result.data);
    } catch (e) {
        console.log(e);
    }

})

/** Icon Api Calls */
// app.get('/icons/:query', async(req, res) => {
//     try{
//         const result = await axios({
//             method: 'get',
//             url: 'https://api.iconfinder.com/v4/icons/search',
//             headers:{
//                 'Authorization': `Bearer ${process.env.ICON_API}`
//             },
//             params: {
//                 query: req.params.query,
//                 count: 1,
//                 premium: false,
//             }
//         })
//         let image_url;
//         if(result.data.length>0){
//             image_url = result.data[0]['vector_sizes'][0]['download_url'];
//         }
//         const image = await axios({
//             method: 'get',
//             url: image_url,
//         });

//         res.json(image.data)
//     }catch(e){
//         console.log(e.message);
//         res.status(404);
//     }

// })

/**News Related Queries */
app.get('/news/:filter', async (req, res) => {
    try {
        const result = await axios({
            method: 'get',
            url: `https://newsapi.org/v2/everything`,
            params: {
                q: req.params.filter,
            },
            headers: {
                "Authorization": `Bearer ${process.env.NEW_API}`
            }
        })
        res.send(result.data);
    } catch (e) {
        console.log(e.message);
        res.status(404);
    }
})
/**Server and Authentication stuff*/

const server = app.listen(process.env.PORT || 8000, function () {
    const host = server.address().address;
    const port = server.address().port;
    console.log("listening at http://%s:%s", host, port)
})

function authenticateToken(req, res, next) {
    const header = req.headers['authorization'];
    console.log(header);
    const token = header && header.split(' ')[1];
    if (header == null) {
        return res.sendStatus(400);
    }
    jwt.verify(header, process.env.AUTH_TOKEN_SECRET, (err, user) => {
        if (err) {
            return res.sendStatus(400);
        }
        req.user = user;
        next();
    })
}