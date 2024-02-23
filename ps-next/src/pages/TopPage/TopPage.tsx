import { FC, JSX } from 'react';
import { ITopPageProps } from '@/pages/TopPage/TopPage.types';

const TopPage: FC<ITopPageProps> = ({menu, firstCategory, page, products}): JSX.Element => {
  return (
    <>
      {JSON.stringify(products)}
    </>
  );
};
export default TopPage;
