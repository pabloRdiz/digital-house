import React from 'react';
import { render } from '../../../test/test-utils';
import { Points } from './Points';

describe('Points component verification', () => {
  test('01 - renders without crashing', () => {
    render(<Points />);
  });

  test('02 - renders the correct text', () => {
    const { getByText } = render(<Points points={10000} />, undefined);
    expect(getByText('Diciembre')).toBeDefined();
    expect(getByText('10.000 pts')).toBeDefined();
  });
});
