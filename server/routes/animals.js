const express = require('express');
const fs = require('fs');
const router = express.Router();
let animals = require('../data');

//---------------------------------- GETS -------------------------------------
/**
 * Gets the current list of animals
 */
router.get('/animals', (req, res) => {
    try {
        res.send(animals)
    } catch (error) {
        res.status(404).send();
    }
})

/**
 * Get an animal by their ID
 */
router.get('/animals/:id', (req, res) => {
    try {
        
        const id = parseInt(req.params.id);
        const animal = animals.find( animal  => { 
            return animal.id === id 
        } );
        
        if ( animal == undefined ) {
            res.status( 400 ).send();
        }
        
        res.send(animal);

    } catch (error) {
        res.status(404).send();
    }
})

//---------------------------------- POSTS ------------------------------------


module.exports = router