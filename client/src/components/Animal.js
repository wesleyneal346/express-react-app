import React from 'react'

const Animal = ({animal }) => {
    return (
        <div className='item'>
            <div className='content ui placeholder'>
                <div className='header'>{animal.name}</div>
                <div className='line'>{animal.age}</div>
                <div className='line'>{animal.species}</div> 
            </div>
        </div>
    );
};

export default Animal;