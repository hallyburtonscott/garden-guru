require('dotenv').config();

const { Client, Pool } = require('pg');

console.log(process.env.PORT);

function Plant(id, api_id, custom, name, notes) {
}

const db = new Pool({
    connectionString: process.env.DATABASE_URL,
});

Plant.initialize = function () {
    db.connect();
    db.query(`CREATE TABLE IF NOT EXISTS plants (
    Plant_id serial PRIMARY KEY, 
    api_id int,
    custum boolean,
    name varchar(50),
    notes varchar(50);`, (err, res) => {
        if (err) {
            console.log(err);
        } else {
            console.log(res); 
        }
    })
    db.end();
}

Plant.findConnections = async function (username) {
    let plant;
    try {
        const res = await db.query(`SElECT plant_id FROM user_plant WHERE user_id=(Select user_id from users where username=$1);`, [username]);
        console.log('result', res);
        if (res.rows != null) {
            plant = res.rows;
            console.log(plant);
        }
        return plant;
    } catch (err) {
        console.log(err);
        console.log('a Plant was not found');
    }
}
Plant.findAll = async function (plant_ids) {
    if(plant_ids){
        const plants = plant_ids.map((plant_id) => {
            const test = async ()=>{
                const res = await db.query('SELECT * from Plants where plant_id=$1;', [plant_id]);
                return res.rows[0]; 
            }
            return test();
        })
        const arr = await Promise.all(plants);
       
        return arr;    
    }else{
        return [];
    }
    
}



Plant.createConnection = async function(username, api_id, name, custom, water_rate){
    try{
    let res; 
    if(custom == 'false'){
        res = await db.query(`insert into user_plant (user_id, plant_id, water_rate) values
    ((select user_id from users where username=$1), (select plant_id from plants where api_id=$2), $3);`, [username, api_id, water_rate]); 
    }else{
        res = await db.query(`insert into user_plant (user_id, plant_id, water_rate) values
    ((select user_id from users where username=$1), (select plant_id from plants where name=$2), $3);`, [username, name, water_rate]); 
    }
    console.log(res);
    return ({
        status: 'success!'
    });
}catch (e){
    return ({
        status: 'failure ',
        error: e,
    });
}
    
}
Plant.create = async function (api_id =0, custom=false, name, notes) {
       try{
        const res = await db.query(`INSERT INTO Plants (api_id, custom, name, notes) VALUES ($1, $2, $3, $4) RETURNING Plant_id`, [api_id, custom, name, notes]);
        if(res.rows){
            return {
                status: 'success',
                data: res.rows[0],
            } 
        }else{
            return {}
        }
       }catch(err){
            return {
                status: 'failure',
                code: err.code,
            };
       }
        

}

Plant.update = async function (Plantname, password, operations) {
    const authenticate = await db.query(`SElECT * FROM Plants WHERE Plantname=$1 AND password=$2;`, [Plantname, password]);
    console.log('authentication status', authenticate.rows);
    if (authenticate.rows.length == 0) {
        return null;
    } else {
        const res = await db.query(`UPDATE Plants SET zip = $1 WHERE Plantname = $2`, [operations.zip, Plantname]);
        return res;
    }

}

module.exports = Plant;