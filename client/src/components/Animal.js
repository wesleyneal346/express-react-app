import React from 'react'

const Animal = ({ animal }) => {
    return (
        <div className='item'>
            <div className='content'>
                <div className='ui header'>{animal.name}</div>
                <div className='label'>{animal.age}</div>
                <div className='label'>{animal.species}</div>
            </div>
        </div>
    );
};

export default Animal;