import React, { FC } from 'react';
import { IUserPost } from '@/types';
import UserPost from '@/components/ui/UserPost/UserPost';

interface IUserPostListProps {
  posts: IUserPost[];
  userName: string;
}

const UserPostList: FC<IUserPostListProps> = ({posts, userName}) => {

  return (
    <div>
      {posts.map(post => <UserPost post={post}
                                   userName={userName}
                                   key={post.id}/>)}
    </div>
  );
};

export default UserPostList;
