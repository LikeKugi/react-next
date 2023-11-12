import { JSX } from 'react';
import Head from 'next/head';
import { IPost } from '@/types/posts.types';
import PostInfo from '@/components/PostInfo';
import { GetStaticPaths, GetStaticProps } from 'next';

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data: IPost[] = await response.json();

  const paths = data.map(({id}) => ({
    params: {id: id.toString()}
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<{ post: IPost }> = async (context) => {
  const id = context.params?.id;
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data: IPost = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: data,
    }
  };
}

const Post = ({post}: {post: IPost}): JSX.Element => {
  return (
    <>
      <Head>
        <title>{post.title} | Post</title>
      </Head>
      <PostInfo post={post}/>
    </>
  );
};
export default Post;
