import HomePage from '@/pages/HomePage/HomePage';
import withLayout from '@/HOC/withLayout';
import { GetStaticProps } from 'next';
import { IHomePageProps } from '@/pages/HomePage/HomePage.types';
import axios from 'axios';
import { IMenuItem } from '@/types';


function Home({menu, firstCategory}: IHomePageProps) {
  return (
    <>
      <HomePage menu={menu} firstCategory={firstCategory}/>
    </>
  );
}

export const getStaticProps: GetStaticProps<IHomePageProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<IMenuItem[]>( process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find", {
    firstCategory,
  });
  return {
    props: {
      menu,
      firstCategory,
    },
  };
}

export default withLayout(Home);
