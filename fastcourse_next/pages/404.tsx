import { JSX } from 'react';
import Link from 'next/link';

const NotFoundPage = (): JSX.Element => {
  return (
    <div>
      <h1>Oops... Not Found</h1>
      <Link href={'/'}>Back to main</Link>
    </div>
  );
};
export default NotFoundPage;
