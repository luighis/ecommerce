import { Dispatch, SetStateAction } from 'react';
import { productProps } from '~/types';

export interface inputTitleProps {
  listProducts: productProps[];
  setListProducts: Dispatch<SetStateAction<productProps[]>>;
  product: productProps;
}
