import { childrenProps } from '~/types';

export const GridProducts = ({ children }: childrenProps) => (
  <section className="flex justify-center flex-wrap gap-4 mx-auto max-w-[90%] w-[57.313rem] font-montserrat py-5">
    {children}
  </section>
);
