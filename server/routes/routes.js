const express = require('express');
const router = express.Router();

router.get('/inicio', (req, res) => {
    res.json({
        "status": "hello"
    });

});

module.exports = router;