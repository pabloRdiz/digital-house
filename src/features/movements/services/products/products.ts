import { MovementsType } from '../../../models';

const API = 'https://6222994f666291106a29f999.mockapi.io/api/v1/products';

export const getProductos = (): Promise<MovementsType[]> => {
  return fetch(API)
    .then(response => response.json())
    .then(response => response)
    .catch(error => {
      console.error(error.message);
    });
};
