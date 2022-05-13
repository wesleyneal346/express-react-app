const express = require('express');
const fs = require('fs');
const router = express.Router()

router.get('/animal', async (req, res) => {
    try {
        await fs.readFile('../data.js', (error, jsonData) => {
            let animalData = JSON.parse(jsonData);
            res.json(animalData);
        });
    } catch (error) {
        res.status(404).send();
    }
})

module.exports = router