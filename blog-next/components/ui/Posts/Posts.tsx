import React, { FC } from 'react';
import styles from './Posts.module.scss'
import PostItem from '@/components/ui/PostItem/PostItem';

interface IPostsProps {
  posts: TBlogPost[];
}

const Posts: FC<IPostsProps> = ({posts}) => {
  return (
    <section className={styles.posts}>
      <h2 className={styles.posts__title}>Blog</h2>
      <ul>
        {posts.map(post => (<li key={post.id}><PostItem post={post} /></li>
        ))}
      </ul>
    </section>
  );
};

export default Posts;
