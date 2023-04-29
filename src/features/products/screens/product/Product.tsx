import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Props } from './Products.types';
import { Button } from '../../../../components';
import { ProductDetail } from '../../components/productDetail';

const CustomHeader = ({ title }: { title?: string }) => (
  <View style={styles.headerContainer}>
    <Text style={styles.headerTitle}>{title}</Text>
  </View>
);

export const Product = (props: Props) => {
  const { navigation, route } = props;
  const product = route.params?.product;

  useEffect(() => {
    if (product) {
      navigation.setOptions({
        header: () => <CustomHeader title={product.product} />,
      });
    }
  }, [navigation, product]);

  return (
    <View style={styles.container}>
      {product && <ProductDetail product={product} />}
      <View style={styles.actionContainer}>
        <Button
          onPress={() => navigation.goBack()}
          size={'normal'}
          text="Aceptar"
        />
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
  actionContainer: {
    marginBottom: 10,
  },

  headerContainer: {
    backgroundColor: '#CFD6FF',
    height: 150,
    justifyContent: 'flex-end',
  },

  headerTitle: {
    fontSize: 24,
    fontWeight: '800',
    lineHeight: 24,
    margin: 22,
  },
});
