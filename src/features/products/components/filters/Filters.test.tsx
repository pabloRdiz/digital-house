import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Filters } from './Filters';
import { FiltersEnum } from '../../hooks';

describe('Filters component verification ', () => {
  test('01 - should render the "Todos" button when filter is "TODOS"', () => {
    const onFilterMock = jest.fn();
    const { getByText } = render(
      <Filters filter={FiltersEnum.TODOS} onFilter={onFilterMock} />,
    );
    const todosButton = getByText('Todos');
    expect(todosButton).toBeDefined();
  });

  test('02 - should render the "Activos" and "Inactivos" buttons when filter is "ACTIVOS" or "INACTIVOS"', () => {
    const onFilterMock = jest.fn();
    const { getByText } = render(
      <Filters filter={FiltersEnum.TODOS} onFilter={onFilterMock} />,
    );
    const activosButton = getByText(FiltersEnum.TODOS);
    expect(activosButton).toBeDefined();
    const inactivosButton = getByText(FiltersEnum.TODOS);
    expect(inactivosButton).toBeDefined();
  });

  test('03 - should call onFilter function with the correct filter when a button is pressed', () => {
    const onFilterMock = jest.fn();
    const { getByText } = render(
      <Filters filter={FiltersEnum.CANJEADOS} onFilter={onFilterMock} />,
    );
    const inactivosButton = getByText(FiltersEnum.CANJEADOS);
    fireEvent.press(inactivosButton);
    expect(onFilterMock).toHaveBeenCalledTimes(1);
    expect(onFilterMock).toHaveBeenCalledWith(FiltersEnum.CANJEADOS);
  });
});
