import React, { ReactNode } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';

type Props = {
  children?: ReactNode;
  containerStyle?: ViewStyle;
};

export const Card = (props: Props) => {
  const { children, containerStyle } = props;

  return (
    <View style={{ ...styles.container, ...containerStyle }}>{children}</View>
  );
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
