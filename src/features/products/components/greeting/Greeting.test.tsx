import React from 'react';
import { render } from '@testing-library/react-native';
import { Greeting } from './Greeting';

describe('Greeting component verification', () => {
  test('01 - renders without crashing', () => {
    render(<Greeting title="Hello" user="John" />);
  });

  test('02 - renders the correct text', () => {
    const { getByText } = render(<Greeting title="Hello" user="John" />);
    expect(getByText('Hello')).toBeDefined();
    expect(getByText('John')).toBeDefined();
  });
});
