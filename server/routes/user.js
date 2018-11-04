const express = require('express');

const router = express.Router();

const User = require('../models/User');

router.get('/me', (req, res) => res.json({
    id: req.user.id,
    name: req.user.name,
    email: req.user.email,
}));

router.get('/getEmployees', (req, res) => {
    User.find({ }, (err, employees) => {
        if (err) res.send(err);
        console.log('Employees Data =>', employees);
        res.send(employees);
    });
});

module.exports = router;
