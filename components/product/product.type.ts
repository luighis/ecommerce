import { ReactNode } from 'react';
import { productProps } from '~/types';

export interface productItemProps extends productProps {
  fontSize: number;
  inputAmount: ReactNode;
  inputTitle: ReactNode;
}
