import React from 'react'

const Animal = ({ animal, bgOption }) => {
    return (
        <div className='ui equal width grid'>
            <div className={`row ${setColorClass(bgOption)}`}>
                <div className='column'>
                    <div className='ui equal width grid'>
                        <div className='column'>
                            <h3>{animal.name}</h3>
                        </div>
                        <div className='column'>
                            <h4>{animal.age}</h4>
                        </div>
                    </div>
                </div>
                <div className='column'>
                    <h4>{animal.species}</h4>
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