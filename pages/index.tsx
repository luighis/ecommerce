import { useState } from 'react';
import { Product } from '~/components/product';
import { GridProducts } from '~/components/layout/grid-products';
import { InputRange } from '~/components/common/input-range';

const initialProducts = [
  {
    id: '1',
    title: 'toumaline & eucalytus bar soap',
    price: '12.00',
    description:
      'Recharge your skin with the super energizing power of finely crushed tourmaline powder blended with natural complexion',
    img_src: '/../public/img/product-a.jpg',
    amount: 10,
  },
  {
    id: '2',
    title: 'toumaline & argan oil bar soap',
    price: '12.00',
    description:
      'Recharge your skin with the super energizing power of finely crushed tourmaline powder blended with natural complexion',
    img_src: '/../public/img/product-b.jpg',
    amount: 1,
  },
  {
    id: '3',
    title: 'toumaline & tea tree bar soap',
    price: '12.00',
    description:
      'Recharge your skin with the super energizing power of finely crushed tourmaline powder blended with natural complexion',
    img_src: '/../public/img/product-c.jpg',
    amount: 1,
  },
  {
    id: '4',
    title: 'toumaline & unscented bar soap',
    price: '12.00',
    description:
      'Recharge your skin with the super energizing power of finely crushed tourmaline powder blended with natural complexion',
    img_src: '/../public/img/product-d.jpg',
    amount: 1,
  },
];

const fontSizeDefaultValue = 16;

export default function Home() {
  const [fontSize, setFontSize] = useState(fontSizeDefaultValue);
  const [products, setProducts] = useState(initialProducts);
  const [quantityProducts, setQuantityProducts] = useState();

  const updateProducts = () => {};

  return (
    <>
      <div className="flex flex-col gap-4 mx-auto max-w-[90%] w-[40rem] font-montserrat py-5">
        <p className="block mb-2 text-base font-semibold text-gray-900">
          increase/decrease font size
        </p>
        <InputRange
          setFontSize={setFontSize}
          fontSizeDefaultValue={fontSizeDefaultValue}
        />
        <div>
          <p>Amount:</p>
          <p>{quantityProducts}</p>
        </div>
      </div>

      <GridProducts>
        {products.map((product) => (
          <Product
            key={product.id}
            {...product}
            fontSize={fontSize}
            setQuantityProducts={setQuantityProducts}
            quantityProducts={quantityProducts}
          />
        ))}
      </GridProducts>
    </>
  );
}
