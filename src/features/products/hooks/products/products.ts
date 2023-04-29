import { useCallback, useRef, useState } from 'react';
import { useQuery } from 'react-query';
import { getProductos } from '../../services';
import { ProductType } from '../../models';
import { FiltersEnum, UseProductsType } from './products.types';

const filterDelegate = (filter: FiltersEnum, product: ProductType) => {
  switch (filter) {
    case FiltersEnum.TODOS:
      return product;
    case FiltersEnum.GANADOS:
      return product.is_redemption ? product : null;
    case FiltersEnum.CANJEADOS:
      return !product.is_redemption ? product : null;
    default:
      return product;
  }
};

const sumPoints = (product: ProductType[]) => {
  return product.reduce((acc, cur) => acc + cur.points, 0);
};

const QUERY_KEY = '/accounts';
const INITAL_DATA: ProductType[] = [];

export const useProducts = (): UseProductsType => {
  const totalPointsRef = useRef<number>(0);
  const currentFilterRef = useRef<FiltersEnum>(FiltersEnum.TODOS);
  const [products, setProducts] = useState<ProductType[]>([]);
  const { data } = useQuery<ProductType[], any>(
    QUERY_KEY,
    () => getProductos(),
    {
      onSuccess: (newData: ProductType[]) => {
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

      const filteredProducts = data.filter((current: ProductType) =>
        filterDelegate(filter, current),
      );
      totalPointsRef.current = sumPoints(filteredProducts);
      setProducts(filteredProducts);
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
