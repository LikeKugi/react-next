import { FC, FormEvent, JSX, useId } from 'react';
import { IPost } from '@/types/post.types';

interface IEditFormProps {
  post: IPost;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const EditPostForm: FC<IEditFormProps> = ({post, onSubmit}): JSX.Element => {
  const titleInputId = useId();
  const textInputId = useId();
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor={titleInputId}>Title</label><input id={titleInputId} type="text" defaultValue={post.title} name={'title'}/>
      <label htmlFor={textInputId}>Text</label><textarea id={textInputId} defaultValue={post.text} name={'text'}/>
      <button>Submit</button>
    </form>
  );
};
export default EditPostForm;
