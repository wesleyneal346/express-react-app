import React from 'react'

const Animal = ({ animal, bgOption }) => {
    return (
        <div className='ui equal width grid'>
            <div className={`row ${setColorClass(bgOption)}`}>
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
        </div>
    );
};

function setColorClass(bgOption) {
    if (bgOption === 0) {
        return 'grey'
    }
    return ''
}
export default Animal;