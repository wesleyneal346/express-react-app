import { useState, useEffect } from "react";
import animalsAPI from '../api';

const useAnimalsGet = (url) => {
  const [animals, setAnimals] = useState([]);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await animalsAPI.get(url);
        setAnimals(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoaded(true);
      }
    })();
  }, []);

  return [animals, error, loaded]
};

export default useAnimalsGet;