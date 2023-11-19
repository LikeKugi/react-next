import { JSX, ReactElement } from 'react';
import Meta from '@/components/Meta/Meta';
import { NextPageWithLayout } from '@/types/types';
import AboutLayout from '@/components/layouts/AboutLayout/AboutLayout';

const AboutPage: NextPageWithLayout = (): JSX.Element => {
  return (
    <>
      <Meta title="About Us" />
      <div>
        <h1>About page</h1>
      </div>
    </>
  );
};

AboutPage.getLayout = function getLayout(page: ReactElement) {
  return (
      <AboutLayout>{page}</AboutLayout>
  )
}

export default AboutPage;
