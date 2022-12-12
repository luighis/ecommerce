import { useEffect, useState } from 'react';
import { Product } from '~/components/product';
import { GridProducts } from '~/components/layout/grid-products';
import { InputRange } from '~/components/common/input-range';
import { InputAmount } from '~/components/common/input-amount';
import { InputTitle } from '~/components/common/input-title';
import { LayoutGlobal } from '~/components/layout/layout-global';
import { initialProducts } from '~/static-data';
import { productQuantities } from '~/utils';

const fontSizeDefaultValue = 16;

export default function Home() {
  const [fontSize, setFontSize] = useState(fontSizeDefaultValue);
  const [listProducts, setListProducts] = useState(initialProducts);
  const [totalQuantityProducts, setTotalQuantityProducts] = useState(
    productQuantities(initialProducts),
  );

  useEffect(() => {
    setTotalQuantityProducts(productQuantities(listProducts));
  }, [listProducts]);

  return (
    <LayoutGlobal>
      <p className="mb-2 text-base font-semibold text-gray-900">
        increase/decrease font size
      </p>
      <InputRange
        setFontSize={setFontSize}
        fontSizeDefaultValue={fontSizeDefaultValue}
      />
      <p className="text-base font-semibold text-gray-800">
        Product Quantities: {totalQuantityProducts}
      </p>

      <GridProducts>
        {listProducts.map((product) => (
          <Product
            key={product.id}
            {...product}
            fontSize={fontSize}
            inputAmount={
              <InputAmount
                listProducts={listProducts}
                product={product}
                setListProducts={setListProducts}
              />
            }
            inputTitle={
              <InputTitle
                listProducts={listProducts}
                product={product}
                setListProducts={setListProducts}
              />
            }
          />
        ))}
      </GridProducts>
    </LayoutGlobal>
  );
}
