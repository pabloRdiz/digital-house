import React from 'react';
import { StyleSheet, Text } from 'react-native';

type Props = {
  title: string;
  user: string;
};
export const Greeting = ({ title, user }: Props) => {
  return (
    <>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.textUser}>{user}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    color: '#020202',
    fontSize: 20,
    fontWeight: '800',
    lineHeight: 27,
  },
  textUser: { color: '#020202', fontWeight: '300', fontSize: 20 },
});
