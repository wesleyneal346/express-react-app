import React from 'react';
import AnimalList from './AnimalList'
import useAnimals from '../hooks/useAnimals'

const App = () => {
  const [animals, error, loaded] = useAnimals('/animals');

  return (
    <div className='ui container'>
          <AnimalList animals={animals} />
    </div>
  );
}

export default App;
