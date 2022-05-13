import React from 'react'

const Animal = ({ animal, bgOption }) => {
    return (
        <div className='ui equal width grid'>
            <div className={`row ${setColorClass(bgOption)}`}>
                <div className='column'>
                    <div className='ui equal width grid'>
                        <div className='column'>
                            <h2>{animal.name}</h2>
                        </div>
                        <div className='column'>
                            <p>{animal.age}</p>
                        </div>
                    </div>
                </div>
                <div className='column'>
                    <p>{animal.species}</p>
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