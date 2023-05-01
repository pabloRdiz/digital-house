import React from 'react';
import { act, renderHook } from '@testing-library/react-hooks';
import { QueryClient, QueryClientProvider } from 'react-query';
import { server } from '../../../test/mocks/server';
import { useProducts } from './products';
import { FiltersEnum } from './products.types';

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

const setup = () => {
  return renderHook(() => useProducts(), { wrapper: createWrapper() });
};

const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
  return ({ children }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe('useProducts custom hook verification', () => {
  test('01 - should return initals values (filter: todos, product.length: 0, points: 0)', async () => {
    const { result } = setup();

    const { currentFilter, products, totalPoints } = result.current;

    expect(currentFilter).toBe(FiltersEnum.TODOS);
    expect(products).toHaveLength(0);
    expect(totalPoints).toBe(0);
  });

  test('02 - should return values (product.length: 4, points: 0)', async () => {
    const { result, waitForNextUpdate } = setup();

    await waitForNextUpdate();

    expect(result.current.products).toHaveLength(4);
    expect(result.current.totalPoints).toBe(2500);
  });

  test('03 - should return values (product.length: 4, points: 0)', async () => {
    const { result, waitForNextUpdate } = setup();

    await waitForNextUpdate();

    act(() => {
      result.current.filterProducts(FiltersEnum.GANADOS);
    });

    expect(result.current.products).toHaveLength(2);
  });
});
