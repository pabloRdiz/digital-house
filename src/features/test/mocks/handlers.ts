import { rest } from 'msw';
import { products } from './data/products';

export const handlers = [
  rest.get(
    'https://6222994f666291106a29f999.mockapi.io/api/v1/products',
    (_req, res, ctx) => {
      return res(ctx.status(200), ctx.json(products));
    },
  ),
  rest.post('*', (req, res, ctx) => {
    console.error(`You MUST write a request handle for ${req.url.toString()}`);
    return res(ctx.status(500));
  }),
];
