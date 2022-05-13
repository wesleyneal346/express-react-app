import { useState, useEffect } from "react";
import animalsAPI from '../api';

const useAnimals = () => {
  const [animals, setAnimals] = useState([]);

  try {
    useEffect(() =>{
      getData()
    })
    const getData = async () => {
      const response = await animalsAPI.get('/animals');
      setAnimals(response.data)
    }

    return [animals, getData]

  } catch (error) {
    console.log(error);
  }
};

export default useAnimals;