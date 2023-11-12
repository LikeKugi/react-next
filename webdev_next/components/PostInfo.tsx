import { JSX } from 'react';
import { IPost } from '@/types/posts.types';
import Heading from '@/components/Heading';

const PostInfo = ({post}: {post: IPost}): JSX.Element => {
  const { title, body } = post || {};

  if (!post) {
    return <Heading tag="h3" text="Empty post" />
  }

  return (
    <div>
      <Heading tag="h3" text={title} />
      <p>{body}</p>
    </div>
  );
};
export default PostInfo;
