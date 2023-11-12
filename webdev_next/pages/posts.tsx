import { JSX } from 'react';
import Heading from '@/components/Heading';
import Head from 'next/head';

const posts = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <main>
        <Heading text="Posts"/>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, fugiat.</p>
      </main>
    </>
  );
};
export default posts;
