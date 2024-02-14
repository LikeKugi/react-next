import { JSX } from 'react';
import withLayout from '@/HOC/withLayout';
import CoursePage from '@/pages/CoursePage/CoursePage';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import axios from 'axios';
import { IMenuItem, IPageModel, IProductModel } from '@/types';
import { ICoursePageProps } from '@/pages/CoursePage/CoursePage.types';
import { API_PATH } from '@/constants';
import { ParsedUrlQuery } from 'querystring';

const firstCategory = 0;

const Course = ({menu, firstCategory, page, products}: ICoursePageProps): JSX.Element => {
  return (
    <>
      <CoursePage menu={menu} firstCategory={firstCategory} page={page} products={products} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {

  const { data: menu } = await axios.post<IMenuItem[]>( API_PATH.FIND.path, {
    firstCategory,
  });

  return {
    paths: menu.flatMap(m => m.pages.map(p => `/courses/${p.alias}`)),
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<ICoursePageProps> = async ({params}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true,
    }
  }
  const { data: menu } = await axios.post<IMenuItem[]>( API_PATH.FIND.path, {
    firstCategory,
  });
  const {data: page} = await axios.get<IPageModel>(`${API_PATH.BY_ALIAS.path}/${params.alias}`)
  const {data: products} = await axios.post<IProductModel[]>(API_PATH.FIND_PRODUCT.path, {
    category: page.category,
    limit: 10,
  })
  return {
    props: {
      menu,
      firstCategory,
      page,
      products
    },
  };
}
export default withLayout(Course);
