import { JSX } from 'react';
import withLayout from '@/HOC/withLayout';
import TopPage from '@/pages/TopPage/TopPage';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import axios from 'axios';
import { IMenuItem, IPageModel, IProductModel } from '@/types';
import { ITopPageProps } from '@/pages/TopPage/TopPage.types';
import { API_PATH } from '@/constants';
import { ParsedUrlQuery } from 'querystring';
import { firstLevelMenu } from '@/utils/firstLevelMenu';

const Top = ({menu, firstCategory, page, products}: ITopPageProps): JSX.Element => {
  return (
    <>
      <TopPage menu={menu} firstCategory={firstCategory} page={page} products={products} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  let paths: string[] = [];

  for (const m of firstLevelMenu) {
    const { data: menu } = await axios.post<IMenuItem[]>( API_PATH.FIND.path, {
      firstCategory: m.id,
    });
    paths = paths.concat(menu.flatMap(s => s.pages.map(p => `/${m.route}/${p.alias}` )))
  }

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<ITopPageProps> = async ({params}: GetStaticPropsContext<ParsedUrlQuery>) => {
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
  try {
    const { data: menu } = await axios.post<IMenuItem[]>( API_PATH.FIND.path, {
      firstCategory: firstCategoryItem.id,
    });
    if (!menu.length) {
      return {
        notFound: true,
      }
    }
    const {data: page} = await axios.get<IPageModel>(`${API_PATH.BY_ALIAS.path}/${params.alias}`)
    const {data: products} = await axios.post<IProductModel[]>(API_PATH.FIND_PRODUCT.path, {
      category: page.category,
      limit: 10,
    })
    return {
      props: {
        menu,
        firstCategory: firstCategoryItem.id,
        page,
        products
      },
    };
  } catch {
    return {
      notFound: true,
    }
  }

}
export default withLayout(Top);
