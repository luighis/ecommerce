import { childrenProps } from '~/types';

export const LayoutGlobal = ({ children }: childrenProps) => (
  <div className="flex flex-col gap-4 mx-auto max-w-[90%] w-[64rem] font-montserrat py-5">
    {children}
  </div>
);
