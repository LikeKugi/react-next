import { JSX } from 'react';
import { useRouter } from 'next/router';

const NotFound = (): JSX.Element => {
  const { replace } = useRouter();
  return (
    <div>
      <h1>Oops... Not found</h1>
      <button onClick={() => replace('/')}>Back to Main</button>
    </div>
  );
};
export default NotFound;
