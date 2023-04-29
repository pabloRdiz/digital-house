import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Card } from '../../../../components';
import { ProductType } from '../../models';
import { formatLogDate, formatNumber } from '../../../../utils/formatters';

type Props = {
  product: ProductType;
};

export const ProductDetail = ({ product }: Props) => {
  return (
    <>
      <Card containerStyle={styles.conatinarCard}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: product.image }} />
        </View>
      </Card>
      <View style={styles.detailsContainer}>
        <Text style={styles.textDetails}>Detalles del producto:</Text>
        <Text style={styles.textDate}>{`Comprado el: ${formatLogDate(
          product.createdAt,
        )}`}</Text>
        <Text style={styles.tiltePoints}>Con esta compra acumulaste:</Text>
        <Text style={styles.textPoints}>{`${formatNumber(
          product.points || 0,
        )} puntos`}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  conatinarCard: { backgroundColor: '#FFFFFF', borderRadius: 10 },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 75,
  },
  image: {
    borderRadius: 10,
    width: 200,
    height: 200,
  },
  detailsContainer: {
    marginTop: 32,
    flex: 1,
  },
  textDetails: {
    fontWeight: '800',
    fontSize: 14,
    lineHeight: 19,
    color: '#9B9898',
  },
  textDate: {
    fontWeight: '800',
    fontSize: 16,
    lineHeight: 22,
    marginTop: 20,
  },
  tiltePoints: {
    color: '#9B9898',
    fontWeight: '800',
    fontSize: 14,
    lineHeight: 19,
    marginTop: 20,
  },
  textPoints: {
    fontWeight: '800',
    fontSize: 24,
    lineHeight: 32,
    marginTop: 32,
  },
});
