import { childrenProps } from '~/types';

export const Button = ({ children }: childrenProps) => {
  return (
    <button className="text-black border-2 border-black py-[0.313rem] px-[0.813rem] bg-[#ead7e5] hover:bg-[#dec1d7] transition ease-in-out">
      {children}
    </button>
  );
};
