import React, { FC } from 'react';
import Link from 'next/link';
import Meta from '@/components/Meta/Meta';
import { GetStaticPaths, GetStaticProps } from 'next';
import { IPost } from '@/types/post.types';

interface ISinglePostProps {
  post: IPost
}
export const getStaticProps: GetStaticProps<ISinglePostProps> = async (context) => {
  const postId = context.params?.id;

  try {
    const response = await fetch(`http://localhost:4000/posts/${postId}`, { next: { revalidate: 60 } });
    const data = await response.json();

    return {
      props: {
        post: data,
      }
    }
  } catch (e) {
    return {
      notFound: true,
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch('http://localhost:4000/posts')
    const posts: IPost[] = await res.json()

    const paths = posts.map((post) => ({
      params: { id: post.id.toString() },
    }))
    return { paths, fallback: 'blocking' }
}

const SinglePostPage: FC<ISinglePostProps> = ({post}) => {

  return (
    <>
      <Meta title={`${post.title}: ${post.text.slice(0, 7)}...`} />
      <div>
        <h1>{post.title}</h1>
        <p>{post.text}</p>
        <p>Post #{post.id}</p>
        <p><Link href={'/posts'}>Back</Link></p>
      </div>
    </>
  );
};

export default SinglePostPage;
