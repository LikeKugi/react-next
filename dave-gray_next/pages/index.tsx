import Meta from '@/components/Meta/Meta';
import { GetServerSideProps } from 'next';
import { IUser } from '@/types';
import ChangeUser from '@/components/ui/ChangeUser/ChangeUser';

export default function Home({ data }: { data: string }) {

  return (
    <>
      <Meta title=""/>
      <main>
        <h1>Hello world!</h1>
        <p>Hello, {data}</p>
        <ChangeUser/>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {

  const userId = context.query.id || 1;

  const result = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  const data: IUser = await result.json();
  return {
    props: {
      data: data.name,
    }
  };
};
