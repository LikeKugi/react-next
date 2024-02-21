import { JSX } from 'react';
import withLayout from '@/HOC/withLayout';
import { GetStaticPaths, GetStaticProps } from 'next';
import { firstLevelMenu } from '@/utils/firstLevelMenu';
import axios from 'axios';
import { IMenuItem } from '@/types';
import { API_PATH } from '@/constants';
import { IHomePageProps } from '@/pages/HomePage/HomePage.types';

const Type = (): JSX.Element => {
  return (
    <>
      Courses Page
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: firstLevelMenu.map(m => `/${m.route}`),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<IHomePageProps> = async ({params}) => {
  if (!params) {
    return {
      notFound: true,
    }
  }
  const firstCategoryItem = firstLevelMenu.find(menu => menu.route === params.type);
  if (!firstCategoryItem) {
    return {
      notFound: true,
    }
  }
  const { data: menu } = await axios.post<IMenuItem[]>(API_PATH.FIND.path, {
    firstCategory: firstCategoryItem.id,
  });
  return {
    props: {
      menu,
      firstCategory: firstCategoryItem.id,
    }
  };
};

export default withLayout(Type);
