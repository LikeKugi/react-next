import { JSX } from 'react';
import withLayout from '@/HOC/withLayout';
import CoursePage from '@/pages/CoursePage/CoursePage';

const Course = (): JSX.Element => {
  return (
    <>
      <CoursePage menu={[]} firstCategory={0} />
    </>
  );
};
export default withLayout(Course);
