import React from 'react';
import { render, screen } from '../../../test/test-utils';
import { server } from '../../../test/mocks/server';
import { Main } from './Main';
import { Props } from './Main.types';
import { FiltersEnum } from '../../hooks';

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

const paramsMock = (): Props => ({
  navigation: {
    navigate: jest.fn(),
  } as unknown as Props['navigation'],
});

describe('Product component verification', () => {
  test('01 - should render componet', async () => {
    render(<Main navigation={paramsMock().navigation} />);
    const username = await screen.getByText(FiltersEnum.TODOS);

    expect(username).not.toBeNull();
  });
});
