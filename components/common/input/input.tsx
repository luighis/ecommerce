import { ChangeEvent, useState } from 'react';

export const Input = ({ setQuantityProducts, amount }) => {
  const [value, setValue] = useState(amount);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const isValid = e.target.validity.valid;
    const inputValue = Number(e.target.value);
    isValid ? setValue(inputValue) : null;
  };

  return (
    <input
      className="focus:shadow text-sm text-center text-gray-700 w-[2.188rem] h-[1.375rem] border border-solid border-gray-400 focus:border-gray-300 focus:outline-none transition ease-in-out"
      type="text"
      value={value}
      onChange={handleOnChange}
      pattern="[0-9]{1,}"
    />
  );
};
