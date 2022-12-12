import { productProps } from '~/types';

export const productQuantities = (products: productProps[]) =>
  products.reduce(
    (accumulator, currentValue) => accumulator + currentValue.amount,
    0,
  );
