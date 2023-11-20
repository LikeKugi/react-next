import React, { FC } from 'react';
import { IUser } from '@/types';
import Link from 'next/link';

interface IUserDetailsProps {
  user: IUser;
}
const UserDetails: FC<IUserDetailsProps> = ({user}) => {
  return (
    <div>
      <p>{user.username}</p>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <Link href={'/users'} >Back</Link>
    </div>
  );
};

export default UserDetails;
