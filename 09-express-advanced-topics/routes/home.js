//This will work with the structuring.js
const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.render('index', { title: 'My Express App', message: 'Hello' });
});

module.exports = router;
