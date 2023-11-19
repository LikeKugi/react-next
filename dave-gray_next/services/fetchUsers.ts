import { IUser } from '@/types';

const BASE_URL = 'https://jsonplaceholder.typicode.com/users'

export const fetchUsers = async (userId: string | number = ''): Promise<IUser[] | IUser | string> => {
  const additionalPath = userId ? '' : `/${userId}`;
  try {
    const result = await fetch(`${BASE_URL}${additionalPath}`);
    return await result.json();
  } catch (e) {
    return (e as Error).message
  }

}
