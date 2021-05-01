const path = require('path');
const sqlite3 = require('sqlite3').verbose();

function User(id, first, last, email, phone, username, password) {
    this.id = id;
    this.first = first;
    this.last = last;
    this.email = email;
    this.phone = phone;
    this.username = username;
    this.password = password;
}

let db = new sqlite3.Database('./users.db', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Users database is up and running!');
    }
})

User.findAll = function () {
    //will return the id of every user, possibly.
    return null;
}
User.create = function (first, last, email, phone, username, password) {
    let userID;
    db.run(`INSERT INTO users ('first', 'last', 'email', 'phone', username, password) VALUES (?, ?, ?, ?, ?, ?)`, [first, last, email, phone, username, password],
        function (err) {
            if(err){
                console.log(err);
                return console.log("A user could not be created");
            }
            console.log(`a user has been inserted with rowid ${this.lastID}`);
            userID = this.lastID;
    });
    return new User(userID, first, last, email, phone, username, password)
}

module.exports = User;