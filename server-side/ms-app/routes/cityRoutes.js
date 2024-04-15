const express = require('express');
const router = express.Router();
const cities = require('../controller/cities');

router.get('/', (req, res) => {
    console.log("city function called")
    res.json(cities);
});

module.exports = router;
