const express = require( 'express' );
const router = express.Router();
let animals = require( '../data' );

//---------------------------------- GETS -------------------------------------
/**
 * Gets the current list of animals
 */
router.get('/animals', ( req, res ) => {
    try {
        res.send( animals )
    } catch ( error ) {
        res.status( 404 ).send();
    }
})

/**
 * Get an animal by their ID
 */
router.get( '/animals/:id', ( req, res ) => {
    try {
        const animal = animals.find( animal  => {
            return animal.id === parseInt( req.params.id ) 
        } );
        
        if ( animal == undefined ) {
            res.status( 400 ).send();
        }
        
        res.send( animal );

    } catch ( error ) {
        res.status( 404 ).send();
    }
})

//---------------------------------- POSTS ------------------------------------
/**
 * Adds a new animal. Creates a new ID based on the id of the last animal in of
 * the current list of animals.
 */
router.post( '/animals', ( req, res ) =>{
    try {
        const lastAnimalID = animals.slice(-1)[0].id;
        const newAnimal = { "id": lastAnimalID + 1, ...req.body };
        animals.push( newAnimal );
        res.status( 201 ).send( newAnimal );
    } catch ( error ) {
        res.status( 400 ).send();
    }
})

//--------------------------------- PATCHES -----------------------------------
/**
 * Updates a single animal. Cannot update species
 */
router.patch( '/animals/:id', ( req, res ) => {
    // allow the user to update the animal's name and age but not their species
    const id = parseInt( req.params.id );
    const updates = Object.keys( req.body );
    const allowedUpdates = [ 'name', 'age' ];
    const isValidUpdate = updates.every( update => {
        return allowedUpdates.includes( update )
    });

    // Protect against the user attempting to update the id or the species
    if ( !isValidUpdate ) {
        return res.status( 400 ).send( { error: 'Invalid Update!' } );
    }

    try {
        const targetAnimalIndex = animals.findIndex( animal => {
            return animal.id === id
        });

        // protect against an invalid search.
        if ( targetAnimalIndex === -1 ) {
            return res.status( 404 ).send( { error: 'Could not find animal to update.' } );
        }

        updates.forEach( update => {
            animals[ targetAnimalIndex ][ update ] = req.body[ update ];
        });

        res.send( animals[ targetAnimalIndex ] );

    } catch ( error ) {
        res.status( 400 );
    }
})

//--------------------------------- DELETE ------------------------------------
/**
 * Deletes one animal based on their ID
 */
router.delete( '/animals/:id', (req, res) => {
    const id = parseInt( req.params.id );

    const indexToRemove = animals.findIndex( animal => {
        console.log(animal.id, id);
        return animal.id === id
    });
    console.log(indexToRemove)
    if ( indexToRemove === -1 ) {
        return res.status( 400 ).send( { error: 'Could not delete requested animal.' } );
    }

    try {
        animals.splice( indexToRemove, 1 );
        res.send()
    } catch (error) {
        res.status( 400 ).send();
    }
})

module.exports = router