import { FC, FormEvent, JSX } from 'react';
import { IPost } from '@/types/post.types';
import Meta from '@/components/Meta/Meta';
import { GetServerSideProps } from 'next';
import EditPostForm from '@/components/EditPostForm/EditPostForm';
import { useRouter } from 'next/router';

interface IEditPageProps {
  post: IPost;
}

const EditPostPage: FC<IEditPageProps> = ({ post }): JSX.Element => {

  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const title = formData.get('title');
    const text = formData.get('text');

    const response = await fetch(`http://localhost:4000/posts/${post.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': "application/json",
      },
      body: JSON.stringify({ text, title, id: post.id }),
    });

    if (response.ok) {
      router.push('/posts');
    }
  };
  return (
    <>
      <Meta title={`Edit ${post.title}`}/>
      <main>
        <h1>Edit Post</h1>
        <EditPostForm post={post}
                      onSubmit={handleSubmit}/>
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<IEditPageProps> = async (context) => {
  const postId = context.params?.id;

  try {
    const response = await fetch(`http://localhost:4000/posts/${postId}`);
    const data = await response.json();

    return {
      props: {
        post: data,
      }
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
};
export default EditPostPage;
