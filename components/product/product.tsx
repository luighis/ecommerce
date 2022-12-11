import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../common/button';
import { Input } from '../common/input';
import { productProps } from './product.type';

export const Product = ({
  title,
  price,
  description,
  img_src,
  fontSize,
  setQuantityProducts,
  amount,
}: productProps) => {
  return (
    <div className="w-[13.563rem] border-2 border-black px-5 pt-7 hover:shadow-lg transition ease-in-out">
      <div className="bg-slate-300 mb-[1.625rem]">
        <Image src={img_src} width={176} height={104} alt="product" />
      </div>
      <h2
        className="font-bold tracking-tighter text-center capitalize sm:text-left"
        style={{ fontSize: `${fontSize}px` }}
      >
        {title}
      </h2>
      <form>
        <div className="flex gap-[0.313rem] pb-[0.813rem] pt-[1.688rem]">
          <span className="text-base font-bold capitalize">${price}</span>
          <Input setQuantityProducts={setQuantityProducts} amount={amount} />
        </div>
        <p className="text-[0.688rem] text-[#72727c]">{description}</p>
        <div className="flex flex-col gap-3 items-center pt-[1.125rem] pb-[2.813rem]">
          <Button>Add to cart</Button>
          <Link
            className="underline transition ease-in-out hover:no-underline"
            href="/"
          >
            Learn More
          </Link>
        </div>
      </form>
    </div>
  );
};
