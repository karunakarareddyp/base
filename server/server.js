const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./db');

const users = require('./routes/user');

console.log('!!!!!!!!!!!!!!!!!!!');
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => { console.log('Database is connected'); },
    (err) => { console.log(`Can not connect to the database${err}`); },
);

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/emp', users);

app.get('/', (req, res) => {
    res.send('hello');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});

module.exports = app;
