import { FC, JSX } from 'react';
import { ICoursePageProps } from '@/pages/CoursePage/CoursePage.types';

const CoursePage: FC<ICoursePageProps> = ({menu, firstCategory, page, products}): JSX.Element => {
  return (
    <>
      {JSON.stringify(products)}
    </>
  );
};
export default CoursePage;
