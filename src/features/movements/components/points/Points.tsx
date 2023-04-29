import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Card } from '../../../../components';

type Props = { points?: number };

export const Points = (props: Props) => {
  const { points = 0 } = props;
  return (
    <Card>
      <Text style={styles.title}>Diciembre</Text>
      <Text style={styles.total}>{`${new Intl.NumberFormat('es').format(
        Number(points),
      )} pts`}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '800',
    lineHeight: 21,
    marginLeft: 18,
    marginTop: 21,
  },
  total: {
    color: '#fff',
    fontSize: 32,
    fontWeight: '800',
    lineHeight: 44,
    marginBottom: 49,
    marginTop: 7,
    textAlign: 'center',
  },
});
