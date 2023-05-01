import React from 'react';
import { render } from '../../../test/test-utils';
import { ProductDetail } from './ProductDetail';
import { ProductType } from '../../models';

describe('ProductDetail component verification', () => {
  const product: ProductType = {
    createdAt: '2022-04-29T00:00:00Z',
    id: '1',
    image: 'https://example.com/product.png',
    points: 100,
    product: 'Product Name',
    is_redemption: true,
  };

  test('01 - should render the product image', () => {
    const { getByTestId } = render(
      <ProductDetail product={product} />,
      undefined,
    );
    const image = getByTestId('product-image-test');
    expect(image.props.source.uri).toBe(product.image);
  });

  test('02 - should render the product details', () => {
    const { getByText } = render(
      <ProductDetail product={product} />,
      undefined,
    );
    const title = getByText('Detalles del producto:');
    const date = getByText(' Comprado el: 28 de abril de 2022');
    const pointsTitle = getByText('Con esta compra acumulaste:');
    const points = getByText('100 puntos');
    expect(title).toBeDefined();
    expect(date).toBeDefined();
    expect(pointsTitle).toBeDefined();
    expect(points).toBeDefined();
  });
});
