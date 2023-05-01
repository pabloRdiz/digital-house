import React from 'react';
import { render } from '@testing-library/react-native';
import { Points } from './Points';

describe('Points component verification', () => {
  test('01 - renders without crashing', () => {
    render(<Points />);
  });

  test('02 - renders the correct text', () => {
    const { getByText } = render(<Points points={10000} />);
    expect(getByText('Diciembre')).toBeDefined();
    expect(getByText('10.000 pts')).toBeDefined();
  });
});
