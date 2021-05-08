require('dotenv').config();

const { Client, Pool } = require('pg');

console.log(process.env.PORT);

function Plant(id, api_id, custom, name, notes) {
}

const db = new Pool({
    connectionString: process.env.DATABASE_URL,
});

// Plant.initialize = function () {
//     db.connect();
//     db.query(`CREATE TABLE IF NOT EXISTS plants (
//     Plant_id serial PRIMARY KEY, 
//     api_id int,
//     custum boolean,
//     name varchar(50),
//     notes varchar(50);`, (err, res) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(res); 
//         }
//     })
//     db.end();
// }

Plant.findConnections = async function (username) {
    let plant;
    try {
        const res = await db.query(`SElECT * FROM user_plant WHERE user_id=(Select user_id from users where username=$1 );`, [username]);
        //console.log('result', res);
        if (res.rows != null) {
            plant = res.rows;
            //console.log(plant);
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



Plant.createConnection = async function(username, plant_id, last_watered, water_rate, duration){
    try{
       const  res = await db.query(`insert into user_plant (user_id, plant_id, water_rate, last_watered, duration, created) values
    ((select user_id from users where username=$1), $2, $3, $4, $5, $6) Returning plant_id;`, [username, plant_id, water_rate, last_watered, duration, Date.now()]); 
    //console.log(res);
    return res.rows; 
}catch (e){
    console.log(e);
    return ``;
}
    
}
Plant.create = async function (attributes = {
    api_id:0,
    custom:true,
    name:'You did not put a name', 
    notes: ``,
}) {
       try{
        const {api_id, custom, name, notes} = attributes;
        const res = await db.query(`INSERT INTO Plants (api_id, custom, name, notes) VALUES ($1, $2, $3, $4) RETURNING Plant_id`, [api_id, custom, name, notes]);
        if(res.rows){
            return res.rows[0];
        }
       }catch(err){
           //console.log('an error occured, probably uniqueness');
            return ``;
       }
        

}
Plant.destroyConnection = async function (username, id){
    console.log(username, id)
    const res = await db.query(`DELETE FROM user_plant WHERE user_id =(SELECT user_id FROM users where username=$1) AND plant_id=$2`, [username, id]);
    console.log('Destruction', res);
    return res; 
}
Plant.update = async function (user_id, plant_id, timestamp) {
   
    const res = await db.query(`UPDATE user_plant Set last_watered = $1 where (plant_id=$2 AND user_id=(Select user_id from users where username=$3));`, [timestamp, plant_id, user_id ]);
    return res;
    

}

module.exports = Plant;