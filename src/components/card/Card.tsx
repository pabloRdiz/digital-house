import React, { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

type Props = {
  children?: ReactNode;
};

export const Card = (props: Props) => {
  return <View style={styles.container}>{props.children}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#334FFA',
    borderRadius: 20,
    shadowColor: '#000000',
    shadowOpacity: 0.5,
    elevation: 8,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
});
