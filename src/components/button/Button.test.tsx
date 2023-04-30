import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { Button } from './Button';

const BUTTON_TEXT = 'Click me';

describe('Button component verification', () => {
  test('01 - renders without crashing', () => {
    render(<Button onPress={() => {}} size="normal" />);
  });

  test('02 - renders the correct text', () => {
    const { getByText } = render(
      <Button onPress={() => {}} size="normal" text={BUTTON_TEXT} />,
    );
    expect(getByText('Click me')).toBeDefined();
  });

  test('03 - calls the "onPress" prop when the button is pressed', () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <Button onPress={onPressMock} size="normal" text={BUTTON_TEXT} />,
    );
    fireEvent.press(getByTestId('onPress-test'));
    expect(onPressMock).toHaveBeenCalled();
  });
});
