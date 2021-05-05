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
User.initialize = function () {
    db.connect();
    db.query(`CREATE TABLE IF NOT EXISTS users (
    user_id serial PRIMARY KEY, 
    username VARCHAR (50) UNIQUE NOT NULL,
    password VARCHAR (50) NOT NULL, 
    email VARCHAR (250) UNIQUE NOT NULL, 
    phone VARCHAR (50) UNIQUE,
    last_login TIMESTAMP, 
    created TIMESTAMP);`, (err, res) => {
        if (err) {
            console.log(err);
        } else {
            console.log(res); 87
        }
    })
    db.end();
}

User.find = async function (username) {
    let user;
    try {
        const res = await db.query(`SElECT * FROM users WHERE username=$1;`, [username]);
        console.log('result', res);
        if (res.rows != null) {
            user = res.rows[0];
            console.log(user);
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

User.update = async function (username, password, operations) {
    const authenticate = await db.query(`SElECT * FROM users WHERE username=$1 AND password=$2;`, [username, password]);
    console.log('authentication status', authenticate.rows);
    if (authenticate.rows.length == 0) {
        return null;
    } else {
        const res = await db.query(`UPDATE users SET zip = $1 WHERE username = $2`, [operations.zip, username]);
        return res;
    }

}

module.exports = User;