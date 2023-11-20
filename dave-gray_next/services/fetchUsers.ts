import { IUser, TUserEndpoints, IUserPost } from '@/types';

const BASE_URL = 'https://jsonplaceholder.typicode.com/users';

export const fetchUsers = async (query: string | number = ''): Promise<IUser[] | IUser | string> => {
  const additionalPath = query ? `/${query}` : '';
  try {
    const result = await fetch(`${BASE_URL}${additionalPath}`);
    return await result.json();
  } catch (e) {
    return (e as Error).message;
  }

};

export const fetchUserData = async (userId: string | number, endpoint: TUserEndpoints): Promise<IUserPost[] | string> => {
  const additionalPath = `/${userId}/${endpoint}`;

  try {
    const result = await fetch(`${BASE_URL}${additionalPath}`);
    return await result.json();
  } catch (e) {
    return (e as Error).message
  }
}
