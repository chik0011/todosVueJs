require('dotenv').config();
const express = require('express');
const cors = require('cors');

const mongoose = require('mongoose');

const user = process.env.MONGO_USER;
const pass = process.env.MONGO_PASS;
const cluster = process.env.MONGO_URL;
const db = process.env.MONGO_DB;
const port = process.env.MONGO_PORT;

mongoose.connect(
    "mongodb://" + cluster + ':' + port + "/" + db,
    {
        pass: pass,
        user: user,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Connexion à Mondo réusste"))
    .catch((e) => console.log(e, "Conexion à MongoDB échoué"))

//const todosRoutes = require('./routes/todo/route.js');
const todosRoutes = require('../routes/todo/route.js');
const app = express();

app.use(express.json());

app.use(cors({
    origin: 'http://localhost:8080'
}));

// Création des routes de l'app
app.use('/ping', (req, res) => {
    res.status(200).send("Ping OK");
})

app.use('/api/v1/todos', todosRoutes);

module.exports = app;
