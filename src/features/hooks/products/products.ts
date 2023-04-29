import { useCallback, useRef, useState } from 'react';
import { useQuery } from 'react-query';
import { getProductos } from '../../movements/services';
import { MovementsType } from '../../models';

export enum FiltersEnum {
  TODOS = 'Todos',
  GANADOS = 'Ganados',
  CANJEADOS = 'Canjeados',
}

const FAKE_FILTER = (filter: FiltersEnum, movement: MovementsType) => {
  switch (filter) {
    case FiltersEnum.TODOS:
      return movement;
    case FiltersEnum.GANADOS:
      return movement.points <= 30000 ? movement : null;
    case FiltersEnum.CANJEADOS:
      return movement.points > 30000 ? movement : null;
    default:
      return movement;
  }
};

const sumPoints = (movement: MovementsType[]) => {
  return movement.reduce((acc, cur) => acc + cur.points, 0);
};

const QUERY_KEY = '/accounts';
const INITAL_DATA: MovementsType[] = [];

export const useProducts = () => {
  const totalPointsRef = useRef<number>(0);
  const currentFilterRef = useRef<FiltersEnum>(FiltersEnum.TODOS);
  const [products, setProducts] = useState<MovementsType[]>([]);
  const { data } = useQuery<MovementsType[], any>(
    QUERY_KEY,
    () => getProductos(),
    {
      onSuccess: (newData: MovementsType[]) => {
        totalPointsRef.current = sumPoints(newData);
        setProducts(newData);
      },
      initialData: INITAL_DATA,
    },
  );

  const filterProducts = useCallback(
    (filter: FiltersEnum) => {
      if (!data) {
        return;
      }

      filter === FiltersEnum.TODOS
        ? (currentFilterRef.current = FiltersEnum.GANADOS)
        : (currentFilterRef.current = FiltersEnum.TODOS);

      const filteredMovements = data.filter((current: MovementsType) =>
        FAKE_FILTER(filter, current),
      );
      totalPointsRef.current = sumPoints(filteredMovements);
      setProducts(filteredMovements);
    },
    [data],
  );

  return {
    currentFilter: currentFilterRef.current,
    filterProducts,
    products,
    totalPoints: totalPointsRef.current,
  };
};
