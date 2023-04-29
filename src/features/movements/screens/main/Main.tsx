import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Props } from './Main.types';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FiltersEnum, useProducts } from '../../../hooks';
import { Greeting, Filters, Points, ProductsList } from '../../components';

export const Main = (props: Props) => {
  const inset = useSafeAreaInsets();
  const { currentFilter, filterProducts, products, totalPoints } =
    useProducts();

  const { navigation } = props;

  const handleFilter = (filter: FiltersEnum) => {
    filterProducts(filter);
  };

  return (
    <View style={[styles.container, { marginTop: inset.top }]}>
      <Greeting title="Bienvenido de vuelta!" user="Ruben Rodriguez" />
      <Text style={styles.textPoints}>TUS PUNTOS</Text>
      <Points points={totalPoints} />
      <ProductsList products={products} />
      <View style={styles.filtersContainer}>
        <Filters filter={currentFilter} onFilter={handleFilter} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 20,
  },
  textPoints: {
    color: '#9B9898',
    fontSize: 14,
    fontWeight: '800',
    lineHeight: 19,
    marginVertical: 20,
  },
  filtersContainer: { marginVertical: 40 },
});
