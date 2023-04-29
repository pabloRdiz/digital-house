import React from 'react';

type ItemProps = {
  id: string;
  title: string;
  createdAt: string;
  points: number;
};

import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const ProductItem = ({ id, title, createdAt, points }: ItemProps) => {
  return (
    <View key={id} style={styles.itemContainer}>
      <Image
        style={styles.itemImage}
        source={{ uri: 'https://loremflickr.com/640/480/animals' }}
      />

      <View style={styles.itemBody}>
        <Text style={styles.itemTitle}>{title}</Text>
        <Text style={styles.itemFooter}>{createdAt}</Text>
      </View>

      <TouchableOpacity
        onPress={() => console.log('press')}
        style={styles.itemAction}>
        <Text style={styles.actionText}>{points}</Text>
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
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16,
    marginRight: 12,
  },
  actionIcon: {
    fontSize: 14,
    fontWeight: '800',
  },
});
