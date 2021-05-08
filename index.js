require('dotenv').config();
const express = require('express');
const axios = require('axios');
const app = express();
const path = require('path');
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

//app.use(express.static(path.join(__dirname, 'client/build')));
app.use(express.static(path.join(__dirname, 'client/build')));
if (process.env.NODE_ENV === 'production') {
	//app.use(express.static('client/build'));
    //Got the solution /^((?!(api)).)*$/ from https://stackoverflow.com/questions/62231197/my-crud-app-works-locally-but-not-on-heroku
    app.get(/^((?!(api)).)*$/, (request, response) => {
        response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}

// app.get('*', (request, response) => {
// 	response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
// });
User.initialize();


/**User related Server Calls */
app.get('/api/', function (req, res) {
    console.log("GET request for homepage");
    res.send('Hello World from the homepage');
})
app.get('/api/users', (req, res) => {
    //res.send('Accesing user data');
    User.findAll().then(result => {
        //console.log(result);
        res.send(JSON.stringify(result));
    });
})
app.get('/api/user', async (req, res) => {
    try {
        const userInfo = await User.find(req.user['username']);
        res.json(userInfo)
    }
    catch (e) {
        //console.log(e);
    }
})


app.post('/api/login', async (req, res) => {
    try {
        //console.log(req.params);
        //console.log('the login worked???');
        const { username, password } = req.body;
        const user = await User.find(username);
        //console.log('user', user);
        if (user) {
            const authenticated = await bcrypt.compare(password, user['password']);
            // console.log(authenticated);
            if (authenticated) {
                //console.log('why are we here?')
                const currentUser = {
                    username: user['username'],
                    zip: user['zip'],
                    mode: user['mode'],
                }
                const accessToken = jwt.sign(currentUser, process.env.AUTH_TOKEN_SECRET);
                //res.json({ accessToken: accessToken, username: username });
                res.json(currentUser);
            } else {
                res.status(404).send('Could not find username with that password');
            }
        }else{
            res.status(404).send('Could not find username with that password');

        }
    }
    catch (e) {
        //console.log(e);
        res.status(404).send('Could not find username with that password');
    }

})

app.post('/api/signup', async (req, res) => {
    try {
        const { first, last, email, phone, username, password } = req.body;
        //console.log(req.body);
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create(first, last, email, phone, username, hashedPassword);
        //console.log(user);
        if (user.status == 'success') {
            res.send(user)
        } else if (user.code == '23505') {
            res.status(409).send('This username already exists');
        } else {
            res.status(500).send('A server error has occured');
        }
    } catch (e) {
        //console.log(e);
        res.send(e);
    }
})

app.put('/api/users/:username', async (req, res) => {
    try {
        const user = await User.find(req.params.username)
        if (user) {
            const authenticated = await bcrypt.compare(req.body.password, user['password']);
            // console.log(authenticated);
            //console.log(authenticated);
            if (authenticated) {
                //console.log('authenticated', authenticated);
                const result = User.update(req.params.username, { zip: req.body.zip, mode: req.body.mode});
                res.sendStatus(200);
            }else{
                res.send('unable to complete action')
            }
        }
    } catch (e) {
        res.status(404).send('unable to perform action')
    }

})


/**Plant Related Server Calls */

app.put('/api/plants', async (req, res) => {
    const { api_id, custom, name, notes } = req.body;
    const plant = await Plant.create(api_id, custom, name, notes);
    res.send(plant);
})
app.put('/api/plants/:username', async (req, res) => {
    const attributes = req.body.attributes;
    const { username } = req.params;
    const { last_watered, water_rate, duration } = attributes
    const plant_id = await Plant.create(attributes);
    const user_plant = await Plant.createConnection(username, plant_id['plant_id'], last_watered, water_rate, duration);
    res.send(user_plant);
})

app.get('/api/plants/:username', async (req, res) => {
    const { username } = req.params;
    const connections = await Plant.findConnections(username);
    res.send(connections);
});
app.post('/api/getPlants', async (req, res) => {
    const plant_ids = req.body['plant_ids'];
    const plant = await Plant.findAll(plant_ids);
    res.send(plant);

})
app.delete('/api/plants/:username', async (req, res) => {
    const { username } = req.params;
    const { id } = req.body;
    //console.log('id', id);
    //console.log('username', username);
    const destruction = await Plant.destroyConnection(username, id);
    res.send(destruction);
})

app.post('/api/plants/:username', async (req, res) => {
    try {
        const { username } = req.params;
        const { plant_id, timestamp } = req.body;
        await Plant.update(username, plant_id, timestamp);
        res.sendStatus(200);
    } catch (e) {
        res.sendStatus(500);
    }

})

/*Weather Related API CALLS */

app.get('/api/weather/:zip', async (req, res) => {
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
        //console.log(e);
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
app.get('/api/news/:filter', async (req, res) => {
    try {
        //console.log('news query was called')
        const result = await axios({
            method: 'get',
            url: `https://newsapi.org/v2/everything`,
            params: {
                q: req.params.filter,
            },
            headers: {
                "Authorization": `Bearer ${process.env.NEWS_API}`
            }
        })
        res.send(result.data);
    } catch (e) {
        //console.log(e.message);
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