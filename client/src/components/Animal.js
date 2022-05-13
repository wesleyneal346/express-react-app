import React from 'react'

const Animal = ({ animal, small }) => {
    return (
        <div className='ui equal width grid'>
            <div className='column'>
                <div className='header'>{animal.name}</div>
            </div>
            <div className='column'>
                <div className='h3'>{animal.age}</div>
            </div>
            <div className='column'>
                <div className='h3'>{animal.species}</div>
            </div>
        </div>
    );
};

export default Animal;