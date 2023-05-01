import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { ProductItem } from './ProductItem';

describe('ProductItem component verification', () => {
  const product = {
    id: '1',
    product: 'Product 1',
    image: 'https://example.com/product1.jpg',
    createdAt: '2022-04-30T23:59:59.999Z',
    is_redemption: false,
    points: 100,
  };

  test('01 - renders the product title and creation date', () => {
    const { getByText } = render(
      <ProductItem product={product} onProductSelected={() => {}} />,
    );
    expect(getByText('Product 1')).not.toBeNull();
    expect(getByText('30 de abril de 2022')).not.toBeNull();
  });

  test('02 - calls the onProductSelected callback when the item is pressed', () => {
    const onProductSelected = jest.fn();
    const { getByTestId } = render(
      <ProductItem product={product} onProductSelected={onProductSelected} />,
    );
    fireEvent.press(getByTestId('product-item'));
    expect(onProductSelected).toHaveBeenCalledWith(product);
  });

  test('03 - renders the correct action symbol and points value', () => {
    const { getByText } = render(
      <ProductItem product={product} onProductSelected={() => {}} />,
    );
    expect(getByText('+')).not.toBeNull();
    expect(getByText('100')).not.toBeNull();

    const redemptionProduct = {
      ...product,
      is_redemption: true,
      points: 50,
    };
    const { getByText: getByText2 } = render(
      <ProductItem product={redemptionProduct} onProductSelected={() => {}} />,
    );
    expect(getByText2('-')).not.toBeNull();
    expect(getByText2('50')).not.toBeNull();
  });
});
