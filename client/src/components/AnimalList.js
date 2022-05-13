import React from 'react';
import Animal from './Animal';

const AnimalList = ({ animals }) => {
    const renderedList = animals.map(animal => {
        return (
            <Animal
                key={animal.id}
                animal={animal}
            />
        );
    });
    return <div className='ui relaxed divided list'>{renderedList}</div>;
}

export default AnimalList;