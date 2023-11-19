import React, { FC } from 'react';
import { IUser } from '@/types';
import { GetServerSideProps } from 'next';
import { fetchUsers } from '@/services/fetchUsers';
import { useRouter } from 'next/router';

interface IUsersPageProps {
  users: IUser[];
}

const UsersPage: FC<IUsersPageProps> = ({ users }) => {

  const router = useRouter();

  return (
    <div>
      {users.map(user => <p key={user.id}>{user.name}</p>)}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<IUsersPageProps> = async () => {
  const users: IUser[] = await fetchUsers() as IUser[];

  if (Array.isArray(users)) {
    return {
      props: {
        users
      }
    };
  }

  return {
    notFound: true,
  };

};

export default UsersPage;
