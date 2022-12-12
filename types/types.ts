import { ReactNode } from 'react';

export interface childrenProps {
  children: ReactNode;
}

export interface productProps {
  id: number;
  title: string;
  price: string;
  description: string;
  img_src: string;
  amount: number;
}
