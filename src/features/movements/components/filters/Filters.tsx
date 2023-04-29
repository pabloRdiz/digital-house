import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FiltersEnum } from '../../../hooks';

const getNotAllFilters = () => {
  return Object.keys(FiltersEnum).filter(
    current =>
      FiltersEnum[current as keyof typeof FiltersEnum] !== FiltersEnum.TODOS,
  );
};

type Props = {
  onFilter: (filter: FiltersEnum) => void;
};

export const Filters = ({ onFilter }: Props) => {
  const [filter, setFilter] = useState(FiltersEnum.TODOS);

  const handleFilterPress = (newFilter: FiltersEnum) => {
    onFilter(newFilter);
    newFilter === FiltersEnum.TODOS
      ? setFilter(FiltersEnum.GANADOS)
      : setFilter(FiltersEnum.TODOS);
  };

  const renderFilters = () => {
    if (filter === FiltersEnum.TODOS) {
      return (
        <TouchableOpacity
          onPress={() => handleFilterPress(FiltersEnum.TODOS)}
          style={styles.button}>
          <Text style={styles.text}>Todos</Text>
        </TouchableOpacity>
      );
    } else {
      const currentFilters = getNotAllFilters();
      return (
        <View style={styles.filtersContainer}>
          {currentFilters.map(current => (
            <TouchableOpacity
              key={current}
              onPress={() =>
                handleFilterPress(
                  FiltersEnum[current as keyof typeof FiltersEnum],
                )
              }
              style={[styles.button, styles.smallButton]}>
              <Text style={styles.text}>
                {FiltersEnum[current as keyof typeof FiltersEnum]}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      );
    }
  };

  return <>{renderFilters()}</>;
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
  filtersContainer: { flexDirection: 'row', justifyContent: 'space-between' },
  smallButton: {
    width: 170,
  },
});
