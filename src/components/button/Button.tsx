import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type ButtonSize = 'normal' | 'small';

enum Color {
  primary = '#334FFA',
}

type Props = {
  color?: Color;
  onPress: () => void;
  size: ButtonSize;
  text?: string;
};

export const Button = (props: Props) => {
  const { color = Color.primary, onPress, size, text } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        size === 'small' ? styles.smallButton : null,
        { backgroundColor: color },
      ]}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#334FFA',
    borderRadius: 10,
    paddingVertical: 14,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '800',
    lineHeight: 22,
  },
  smallButton: {
    width: 170,
  },
});
