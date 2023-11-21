import { FC, JSX } from 'react';
import SearchBox from '@/components/ui/SearchBox/SearchBox';
import { GetServerSideProps } from 'next';
import { fetchWiki } from '@/services/fetchWiki';
import { IResult, ISearchResult } from '@/types';
import SearchItem from '@/components/ui/SearchItem/SearchItem';

interface ISearchPageProps {
  pages?: {
    [T: string]: IResult,
  };
}

const SearchPage: FC<ISearchPageProps> = ({ pages }): JSX.Element => {

  return (
    <div>

      <h1>Search</h1>
      <SearchBox/>
      {pages && Object.values(pages).map(page => <SearchItem key={page.title} page={page} />)}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<ISearchPageProps> = async (context) => {
  const q = context.query?.q;

  if (!q) {
    return {
      props: {}
    };
  }
  const response: ISearchResult = await fetchWiki(q as unknown as string);

  return {
    props: {
      pages: response.query?.pages,
    }
  };
};
export default SearchPage;
