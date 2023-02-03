import express from "express";
import mysql from "mysql2";

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "bilguun70",
    database: "users",
    port: 2080
})

db.connect();

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    db.query("SELECT * FROM users", (err, rows, fields) => {
        if(err) throw err;
        console.log("The solution is: ", rows[0]);
        res.send(rows[0]);
    })
})

app.post('/', (req, res) => {
    const { id, username, email, firstName, password } = req.body;
    db.query(`INSERT INTO users (id, username, email, firstName) VALUES ("${id}", "${username}", "${email}", "${firstName}", "${password}")`, (err, rows, fields) => {
        if(err) throw err;
        res.send("Successfully add new user");
    })
})

app.get('/:id', (req, res) => {
    const { id } = req.params;
})


app.listen(8080, () => {
    console.log(`Listening you on port ${8080}`);
})