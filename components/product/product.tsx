import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../common/button';
import { productItemProps } from './product.type';
import { useState } from 'react';

export const Product = ({
  title,
  price,
  description,
  img_src,
  fontSize,
  inputAmount,
  inputTitle,
}: productItemProps) => {
  const [openEditor, setOpenEditor] = useState(false);
  const handleClick = () => setOpenEditor((state) => !state);

  return (
    <div className="w-[13.563rem] border-2 border-black px-5 pt-7 hover:shadow-lg transition ease-in-out">
      <div className="bg-slate-300 mb-[1.625rem]">
        <Image src={img_src} width={176} height={104} alt="product" />
      </div>
      <h2
        className="font-bold tracking-tighter text-center capitalize break-words sm:text-left"
        style={{ fontSize: `${fontSize}px` }}
      >
        {title}
      </h2>
      <div className="flex gap-[0.313rem] pb-[0.813rem] pt-[1.688rem]">
        <span className="text-base font-bold capitalize">${price}</span>
        {inputAmount}
      </div>
      <p className="break-words text-[0.688rem] text-[#72727c]">
        {description}
      </p>
      <div className="flex flex-col gap-3 items-center pt-[1.125rem] pb-[2.813rem]">
        <Button>Add to cart</Button>
        <Link
          className="underline transition ease-in-out hover:no-underline"
          href="/"
        >
          Learn More
        </Link>
      </div>
      <div className="pb-3">
        <p
          className="font-semibold tracking-tighter underline capitalize transition ease-in-out cursor-pointer hover:no-underline"
          onClick={handleClick}
        >
          Edit title
        </p>
        {openEditor && inputTitle}
      </div>
    </div>
  );
};
