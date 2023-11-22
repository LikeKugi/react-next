import { JSX } from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { getPostData } from '@/services/posts';
import Link from 'next/link';
import Wrapper from '@/components/ui/Wrapper/Wrapper';

interface IDetailPostPageProps {
  post: TBlogPost  & { contentHtml: string };
}

export const getServerSideProps: GetServerSideProps<IDetailPostPageProps> = async (context) => {
  const postId = context.query.id as string;

  const post = await getPostData(postId)

  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post,
    }
  }
}

const DetailPostPage = ({post}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element => {
  return (
    <article>
      <Wrapper>
        <section dangerouslySetInnerHTML={{ __html: post.contentHtml }}></section>
        <Link href={'/posts'}>Back</Link>
      </Wrapper>
    </article>
  );
};
export default DetailPostPage;
