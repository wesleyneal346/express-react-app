import React from 'react';
import Animal from './Animal';

const AnimalList = ({ animals }) => {
    let bg = ''
    const renderedList = animals.map(animal => {
        if (animal.id % 2 === 1) {
            bg = 'grey';
        }
        return (
            <Animal
                key={animal.id}
                animal={animal}
                bg={bg}
            />
        );
    });
    return <div className='list'>{renderedList}</div>;
}

export default AnimalList;