import { CarType } from '../types';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key':
      '75dc092df0msh3c03138e5cc1ea2p19035ejsn916bcc592247',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  },
};

export async function fetchCars(): Promise<CarType[]> {
  const res = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla`,
    options
  );

  const data = await res.json();

  return data;
}
