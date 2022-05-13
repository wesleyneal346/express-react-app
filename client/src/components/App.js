import React from 'react';
import AnimalList from './AnimalList'
import useAnimals from '../hooks/useAnimals'

const App = () => {
  const [animals, error, loaded] = useAnimals('/animals');

  return (
    <div className='ui container'>
      <div className='ui grid'>
        <div className='eleven wide column'>
          <AnimalList animals={animals} />
        </div>
      </div>
    </div>
  );
}

export default App;
