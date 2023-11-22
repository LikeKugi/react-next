import { JSX } from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { getSortedPostsData } from '@/services/posts';
import Posts from '@/components/ui/Posts/Posts';

interface IPostPageProps {
  posts: TBlogPost[];
}

export const getServerSideProps: GetServerSideProps<IPostPageProps> = async () => {
  const posts = getSortedPostsData();
  return {
    props: {
      posts
    },
  }
}

const PostsPage = ({posts} : InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element => {
  return (
    <>
      <Posts posts={posts} />
    </>
  );
};
export default PostsPage;
