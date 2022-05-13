import React from 'react';
import Animal from './Animal';

const AnimalList = ({ animals }) => {
    const renderedList = animals.map(animal => {
        const bgOption = animal.id % 2;
        return (
            <Animal
                key={animal.id}
                animal={animal}
                bgOption={bgOption}
            />
        );
    });
    return <div className='list'>{renderedList}</div>;
}

export default AnimalList;