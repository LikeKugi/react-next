import React, { FC } from 'react';
import { IUser } from '@/types';
import { GetServerSideProps } from 'next';
import { fetchUsers } from '@/services/fetchUsers';
import Link from 'next/link';

interface IUsersPageProps {
  users: IUser[];
}

const UsersPage: FC<IUsersPageProps> = ({ users }) => {

  return (
    <div>
      {users.map(user => <p key={user.id}><Link href={`/users/${user.id}`}>{user.name}</Link></p>)}
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
