require('dotenv').config();

const { Client, Pool } = require('pg');

console.log(process.env.PORT);

function User(id, first, last, email, phone, username, password) {
    this.id = id;
    this.first = first;
    this.last = last;
    this.email = email;
    this.phone = phone;
    this.username = username;
    this.password = password;
}

const db = new Pool({
    connectionString: process.env.DATABASE_URL,
});

console.log(process.env.DATABASE_URL);
User.initialize = async function () {
    try{
        await db.connect();
        const step1 = await db.query(`CREATE TABLE IF NOT EXISTS users (
        user_id serial PRIMARY KEY, 
        username VARCHAR (50) UNIQUE NOT NULL,
        password VARCHAR (250) NOT NULL, 
        email VARCHAR (250) UNIQUE NOT NULL, 
        phone VARCHAR (50) ,
        zip VARCHAR(50),
        first VARCHAR(50),
        last VARCHAR(50),
        mode VARCHAR(50));`); 
        
        const step2 = await db.query(`CREATE TABLE IF NOT EXISTS plants (
            plant_id serial PRIMARY KEY, 
            api_id VARCHAR(50),
            custom BOOLEAN, 
            name VARCHAR(50),
            notes VARCHAR(8000),
            attributes VARCHAR(8000)
        );`);
    
        const step3 = await db.query(`CREATE TABLE IF NOT EXISTS user_plant (
            user_id integer NOT NULL, 
            plant_id integer NOT NULL, 
            last_watered VARCHAR(250),
            duration real,
            water_rate real,
            created VARCHAR(250),
            PRIMARY KEY (user_id, plant_id),
            FOREIGN KEY (plant_id) REFERENCES plants(plant_id) ON UPDATE CASCADE,
            FOREIGN KEY (user_id) REFERENCES users(user_id) ON UPDATE CASCADE
    
        );`);
    }catch(e){
        console.log(e);
    }
    
}

User.find = async function (username) {
    let user;
    try {
        const res = await db.query(`SElECT * FROM users WHERE username=$1;`, [username]);
        //console.log('result', res);
        if (res.rows != null) {
            user = res.rows[0];
            //console.log(user);
        }
        return user;
    } catch (err) {
        console.log(err);
        console.log('a user was not found');
    }
}
User.findAll = async function () {
    let users = [];
    const res = await db.query('SELECT * from users');
    console.log('resrows', res.rows);
    res.rows.forEach(e => users.push(e));
    return users;
}
User.create = async function (first, last, email, phone, username, password) {
       try{
        const res = await db.query(`INSERT INTO users (first, last, email, phone, username, password) VALUES ($1, $2, $3, $4, $5, $6) RETURNING user_id`, [first, last, email, phone, username, password]);
        console.log('result', res);
        if(res.rows){
            return {
                status: 'success',
                data: res.rows[0],
            } 
        }else{
            console.log('result', res);
            return {}
        }
       }catch(err){
            return {
                status: 'failure',
                code: err.code,
            };
       }
        

}

User.update = async function (username, operations) {

    //const authenticate = await db.query(`SElECT * FROM users WHERE username=$1 AND password=$2;`, [username, password]);
    //console.log('authentication status', authenticate.rows);
        if(operations.zip){
            const res = await db.query(`UPDATE users SET zip = $1 WHERE username = $2`, [operations.zip, username]);
        }
        if(operations.mode){
            const res = await db.query(`UPDATE users SET mode = $1 WHERE username = $2`, [operations.mode, username]);
        }
       
       
    

}

module.exports = User;