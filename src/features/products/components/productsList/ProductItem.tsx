import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { formatLogDate } from '../../../../utils/formatters';
import { ProductType } from '../../models';

type ItemProps = {
  onProductSelected: (product: ProductType) => void;
  product: ProductType;
};

const getSymbolsColors = (value: boolean) => (value ? '#FF0000' : '#00B833');

export const ProductItem = (props: ItemProps) => {
  const { onProductSelected, product } = props;

  const handleOnPress = (productSelected: ProductType) => {
    onProductSelected(productSelected);
  };

  return (
    <View key={product.id} style={styles.itemContainer}>
      <Image style={styles.itemImage} source={{ uri: product.image }} />

      <View style={styles.itemBody}>
        <Text style={styles.itemTitle}>{product.product}</Text>
        <Text style={styles.itemFooter}>
          {formatLogDate(product.createdAt)}
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => handleOnPress(product)}
        style={styles.itemAction}
        testID="product-item">
        <Text
          style={[
            styles.actionText,
            styles.actionSymbol,
            { color: getSymbolsColors(product.is_redemption) },
          ]}>
          {product.is_redemption ? '-' : '+'}
        </Text>
        <Text style={styles.actionText}>{product.points}</Text>
        <Text style={styles.actionIcon}>{'>'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    marginVertical: 4,
  },

  itemImage: {
    borderRadius: 10,
    width: 55,
    height: 55,
  },
  itemBody: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'space-between',
    paddingVertical: 4,
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: '800',
    lineHeight: 19,
  },
  itemFooter: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16,
  },
  itemAction: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  actionText: {
    fontSize: 16,
    fontWeight: '800',
    lineHeight: 16,
    marginRight: 12,
  },
  actionSymbol: {
    marginRight: 0,
  },
  actionTextPositive: {
    color: '#00B833',
  },
  actionIcon: {
    fontSize: 14,
    fontWeight: '800',
  },
});
