import { ChangeEvent, useState } from 'react';
import { inputRangeProps } from './inputRange.type';

const rangeMax = 25;
const rangeMin = 10;

export const InputRange = ({
  setFontSize,
  fontSizeDefaultValue = 16,
}: inputRangeProps) => {
  const [value, setValue] = useState(fontSizeDefaultValue);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const rangeValue = Number(e.target.value);
    setValue(rangeValue);
    setFontSize(rangeValue);
  };
  return (
    <input
      type="range"
      min={rangeMin}
      max={rangeMax}
      value={value}
      onChange={handleOnChange}
      className="w-full h-2 bg-blue-100 appearance-none"
    />
  );
};
