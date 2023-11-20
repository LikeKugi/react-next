import { FC, JSX } from 'react';
import { IUserPost } from '@/types';
import styles from './UserPost.module.scss'

interface IUserPostProps {
  post: IUserPost;
  userName: string;
}

const UserPost: FC<IUserPostProps> = ({post, userName}): JSX.Element => {

  return (
    <div className={styles.post}>
      <h2 className={styles.post__title}>{post.title}</h2>
      <p className={styles.post__text}>{post.body}</p>
      <p className={styles.post__name}>{userName}</p>
    </div>
  );
};
export default UserPost;
