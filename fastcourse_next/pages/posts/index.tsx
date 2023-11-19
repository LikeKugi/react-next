import { FC, JSX } from 'react';
import Link from 'next/link';
import Meta from '@/components/Meta/Meta';
import { GetServerSideProps } from 'next';
import { IPost } from '@/types/post.types';

interface IPostPageProps {
  posts: IPost[]
}

export const getServerSideProps: GetServerSideProps<IPostPageProps> = async () => {

    try {
      const result = await fetch('http://localhost:4000/posts');
      const data: IPost[] = await result.json();

      return {
        props: {
          posts: data
        }
      }
    } catch (e) {
      return {
        notFound: true,
      }
    }
}

const PostsPage: FC<IPostPageProps> = ({posts}): JSX.Element => {
  return (
    <>
      <Meta title="Posts Page" />
      <main>
        <h1>Posts page</h1>
        <p><Link href={'/posts/add'}>Add new post</Link></p>
        <ul>
          {posts.map((post) => (<li key={post.id}>
            <Link href={`/posts/${post.id}`}>Post {post.title}</Link>
          </li>))}
        </ul>
      </main>
    </>
  );
};


export default PostsPage;
