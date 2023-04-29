import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FiltersEnum } from '../../hooks';
import { Button } from '../../../../components';

const getNotAllFilters = () => {
  return Object.keys(FiltersEnum).filter(
    current =>
      FiltersEnum[current as keyof typeof FiltersEnum] !== FiltersEnum.TODOS,
  );
};

type Props = {
  onFilter: (filter: FiltersEnum) => void;
  filter: FiltersEnum;
};

export const Filters = (props: Props) => {
  const { filter, onFilter } = props;

  const renderFilters = () => {
    if (filter === FiltersEnum.TODOS) {
      return (
        <Button
          onPress={() => onFilter(FiltersEnum.TODOS)}
          size={'normal'}
          text="Todos"
        />
      );
    } else {
      const currentFilters = getNotAllFilters();
      return (
        <View style={styles.filtersContainer}>
          {currentFilters.map(current => {
            const filterText = FiltersEnum[current as keyof typeof FiltersEnum];
            return (
              <Button
                key={current}
                onPress={() => onFilter(filterText)}
                size={'small'}
                text={filterText}
              />
            );
          })}
        </View>
      );
    }
  };

  return <>{renderFilters()}</>;
};

const styles = StyleSheet.create({
  filtersContainer: { flexDirection: 'row', justifyContent: 'space-between' },
});
