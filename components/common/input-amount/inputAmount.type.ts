import { Dispatch, SetStateAction } from 'react';
import { productProps } from '~/types';

export interface inputAmountProps {
  listProducts: productProps[];
  setListProducts: Dispatch<SetStateAction<productProps[]>>;
  product: productProps;
}
