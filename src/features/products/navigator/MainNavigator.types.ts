import { ProductType } from '../models';

export enum MainNavigatorScreens {
  MAIN = 'main',
  PRODUCT = 'product',
}

export type RouteStackParams = {
  [MainNavigatorScreens.MAIN]: undefined;
  [MainNavigatorScreens.PRODUCT]: { product: ProductType };
};
