import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { ProductItem } from './ProductItem';
import { ProductType } from '../../models';

type Props = {
  onProductSelected: (product: ProductType) => void;
  products: ProductType[];
};

export const ProductsList = (props: Props) => {
  const { onProductSelected, products } = props;

  const handleOnProductSelected = (productSelected: ProductType) => {
    onProductSelected(productSelected);
  };

  return (
    <>
      <Text style={styles.text}>TUS MOVIMIENTOS</Text>
      <View style={styles.containerList}>
        <FlatList
          data={products}
          renderItem={({ item }) => (
            <ProductItem
              product={item}
              onProductSelected={handleOnProductSelected}
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  containerList: {
    backgroundColor: 'white',
    borderRadius: 10,
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  text: {
    color: '#9B9898',
    fontSize: 14,
    fontWeight: '800',
    lineHeight: 19,
    marginVertical: 20,
  },
});
