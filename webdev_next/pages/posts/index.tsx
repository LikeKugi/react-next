import { JSX } from 'react';
import Head from 'next/head';
import Heading from '@/components/Heading';
import { IPost } from '@/types/posts.types';
import Link from 'next/link';
import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps<{ posts: IPost[] }> = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data: IPost[] = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      posts: data,
    }
  };
}


const Index = ({posts}: {posts: IPost[]}): JSX.Element => {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <main>
        <Heading text="Posts"/>
        <ul>
          {posts && posts.map((post) => (
            <li key={post.id}>
              <Link href={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};
export default Index;
