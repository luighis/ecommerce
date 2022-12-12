import { ChangeEvent, useState } from 'react';
import { productProps } from '~/types';
import { inputTitleProps } from './inputTitle.type';

export const InputTitle = ({
  listProducts,
  product,
  setListProducts,
}: inputTitleProps) => {
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const index = listProducts.findIndex(
      (item: productProps) => item.id === product.id,
    );
    if (index >= 0)
      setListProducts((products: productProps[]) => {
        const productChanged = { ...products[index] };
        productChanged.title = inputValue;
        const copyProducts = [...products];
        copyProducts.splice(index, 1, productChanged);
        return copyProducts;
      });
  };
  return (
    <input
      className="p-[0.313rem] focus:shadow text-sm text-center text-gray-700 w-full h-[1.375rem] border border-solid border-gray-400 focus:border-gray-300 focus:outline-none transition ease-in-out"
      type="text"
      value={product.title}
      onChange={handleOnChange}
    />
  );
};
