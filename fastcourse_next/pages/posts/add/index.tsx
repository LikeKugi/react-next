import { FormEvent, JSX } from 'react';
import Meta from '@/components/Meta/Meta';
import { useRouter } from 'next/router';
import EditPostForm from '@/components/EditPostForm/EditPostForm';

const AddPostPage = (): JSX.Element => {

  const router = useRouter();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const title = formData.get('title');
    const text = formData.get('text');

    const response = await fetch(`http://localhost:4000/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': "application/json",
      },
      body: JSON.stringify({ text, title }),
    });

    if (response.ok) {
      router.push('/posts');
    }
  };


  return (
    <>
      <Meta title="Add New Post" />
      <div>
        <h1>Add new Post</h1>
        <EditPostForm post={{title: '', text: '', id: -1}} onSubmit={handleSubmit} />
      </div>
    </>
  );
};
export default AddPostPage;
