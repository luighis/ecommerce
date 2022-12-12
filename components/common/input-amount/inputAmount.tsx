import { ChangeEvent } from 'react';
import { productProps } from '~/types';
import { inputAmountProps } from './inputAmount.type';

export const InputAmount = ({
  listProducts,
  setListProducts,
  product,
}: inputAmountProps) => {
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const isValid = e.target.validity.valid;
    if (!isValid) return;

    const index = listProducts.findIndex(
      (item: productProps) => item.id === product.id,
    );
    if (index >= 0)
      setListProducts((products: productProps[]) => {
        const productChanged = { ...products[index] };
        productChanged.amount = Number(e.target.value);
        const copyProducts = [...products];
        copyProducts.splice(index, 1, productChanged);
        return copyProducts;
      });
  };

  return (
    <input
      className="focus:shadow text-sm text-center text-gray-700 w-[2.188rem] h-[1.375rem] border border-solid border-gray-400 focus:border-gray-300 focus:outline-none transition ease-in-out"
      type="text"
      value={product.amount}
      onChange={handleOnChange}
      pattern="[0-9]{1,}"
    />
  );
};
