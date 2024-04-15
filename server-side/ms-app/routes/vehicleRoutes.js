const express = require('express');
const router = express.Router();
const vehicles = require('../controller/vehicle');

router.get('/', (req, res) => {
    res.json(vehicles);
});

module.exports = router;
