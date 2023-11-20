import { JSX } from 'react';
import Meta from '@/components/Meta/Meta';
import { useRouter } from 'next/router';

const NotFoundPage = (): JSX.Element => {
  const router = useRouter();
  return (
    <>
      <Meta title="Not Found" />
      <div>
        <h1>Oops, Not Found...</h1>
        <button onClick={() => router.replace('/')}>Back to Main</button>
      </div>
    </>
  );
};
export default NotFoundPage;

