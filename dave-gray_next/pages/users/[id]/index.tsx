import { FC, JSX, Suspense } from 'react';
import { IUser, IUserPost } from '@/types';
import UserDetails from '@/components/ui/UserDetails/UserDetails';
import { GetServerSideProps } from 'next';
import { fetchUserData, fetchUsers } from '@/services/fetchUsers';
import Meta from '@/components/Meta/Meta';
import UserPostList from '@/components/ui/UserPostList/UserPostList';

interface ISingleUserPageProps {
  user: IUser;
  posts: IUserPost[];
}

const SingleUserPage: FC<ISingleUserPageProps> = ({ user, posts }): JSX.Element => {
  return (

    <>
      <Meta title={user.name}/>
      <div>
        <h1>{user.name}</h1>
        <UserDetails user={user}/>
        <Suspense fallback={<h2>Loading ... </h2>}>
          <UserPostList posts={posts} userName={user.name} />
        </Suspense>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<ISingleUserPageProps> = async (context) => {
  const userId = context.params?.id;
  const user = await fetchUsers(userId as string) as IUser | string;

  const posts = await fetchUserData(userId as string, 'posts');

  if (typeof user === 'string' || typeof posts === 'string') {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      user,
      posts
    }
  };
};
export default SingleUserPage;
