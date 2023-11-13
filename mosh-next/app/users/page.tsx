import { IUser } from '@/types/user.types';

const UsersPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {next: {revalidate: 30}});
  const users: IUser[] = await res.json();

  return (
    <div>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <ul>
        {
          users.map(user => <li key={user.id}>{user.username}</li>)
        }
      </ul>
    </div>
  );
};
export default UsersPage;
