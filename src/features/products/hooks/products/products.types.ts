import { ProductType } from '../../models';

export enum FiltersEnum {
  TODOS = 'Todos',
  GANADOS = 'Ganados',
  CANJEADOS = 'Canjeados',
}

export type UseProductsType = {
  currentFilter: FiltersEnum;
  filterProducts: (filter: FiltersEnum) => void;
  products: ProductType[];
  totalPoints: number;
};
