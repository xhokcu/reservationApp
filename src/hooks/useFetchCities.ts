import { useState, useEffect } from 'react';
import axios from 'axios';
import uuid from 'react-native-uuid';
import { ICity } from 'types/ICity';

const useFetchCities = () => {
  const [cities, setCities] = useState<ICity[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await axios.get(
          'https://turkiyeapi.dev/api/v1/provinces',
        );
        const filteredData = response.data.data.map((city: any) => ({
          id: uuid.v4() as string,
          name: city.name,
          latitude: city.coordinates.latitude,
          longitude: city.coordinates.longitude,
        }));
        setCities(filteredData);
      } catch (error) {
        console.error('Error fetching cities:', error);
        setError('Error fetching cities');
      } finally {
        setLoading(false);
      }
    };

    fetchCities();
  }, []);

  return { cities, loading, error };
};

export default useFetchCities;
