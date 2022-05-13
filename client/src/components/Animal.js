import React from 'react'

const Animal = ({ animal, bg }) => {
    return (
        <div className='ui segment'>
            <div className={`ui three column relaxed ${bg} grid`}>
                <div className='column header'>{animal.name}</div>
                <div className='column h3'>{animal.age}</div>
                <div className='column h3'>{animal.species}</div>
            </div>
        </div>
    );
};

export default Animal;