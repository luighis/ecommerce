import { Dispatch, SetStateAction } from 'react';
export interface inputRangeProps {
  setFontSize: Dispatch<SetStateAction<number>>;
  fontSizeDefaultValue: number;
}
