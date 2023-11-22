import { FC, JSX } from 'react';
import { getFormattedDate } from '@/services/getFormattedDate';
import Link from 'next/link';

interface IPostItemProps {
  post: TBlogPost
}

const PostItem: FC<IPostItemProps> = ({post}): JSX.Element => {
  const {id, title, date} = post;
  return (
    <section>
      <Link href={`/posts/${id}`}>{title}</Link>
      <p>{getFormattedDate(date)}</p>
    </section>
  );
};
export default PostItem;
