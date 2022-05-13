import React from 'react';
import AnimalList from './AnimalList'
import useAnimals from '../hooks/useAnimals'

const App = () => {
  const [animals, error, loaded] = useAnimals('/animals');

  return (
    <div className='ui container'>
      <div className='ui equal width grid'>
        <div className='column'>
          <h1>Name/Age</h1>
        </div>
        <div className='column'>
          <h1>Species</h1>
        </div>
      </div>
      <AnimalList animals={animals} />
    </div>
  );
}

export default App;
