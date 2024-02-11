import { CarType } from '../types';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key':
      '75dc092df0msh3c03138e5cc1ea2p19035ejsn916bcc592247',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  },
};

type FilterType = {
  make?: string;
  model?: string;
};

export async function fetchCars(
  filters: FilterType
): Promise<CarType[]> {
  // varsayılan değer ataması yaptık
  // çümkü objenin bu dğeleri tanımsız da gelebilir
  // tanımsız geldiği durumda direkt bmw arattık
  const { make = 'bmw', model = 'm3' } = filters;

  const res = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${make}&modelFamily=${model}`,
    options
  );

  const data = await res.json();

  return data;
}
