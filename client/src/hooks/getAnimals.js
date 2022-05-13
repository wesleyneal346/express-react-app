// import { useState } from "react";
import animalsAPI from '../api';

const getAnimals = async () => {
  // const [animals, setAnimals] = useState();
  try {
    const response = await animalsAPI.get('/animals');
    console.log(response.data);

    // setAnimals(response.data.items);

    return response.data;

  } catch (error) {
    console.log(error);
  }
};

export default getAnimals;