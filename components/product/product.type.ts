import { Dispatch, SetStateAction } from 'react';

export interface productProps {
  title: string;
  price: string;
  description: string;
  img_src: string;
  fontSize: number;
  setQuantityProducts: Dispatch<SetStateAction<number>>;
  amount: number;
}
