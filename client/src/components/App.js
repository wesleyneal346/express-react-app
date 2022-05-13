import React from 'react';
import getAnimals from '../hooks/getAnimals'
import AnimalList from "./AnimalList";
// import getAnimals from "../hooks/getAnimals";

const App = async () => {
  // const [selectedAnimal, setSelectedAnimal] = useState(null);
  const animals = getAnimals()
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
