import { JSX } from 'react';
import Link from 'next/link';

const index = (): JSX.Element => {
  return (
    <div>
      some text
      <Link href={'/about'}>Back</Link>
    </div>
  );
};
export default index;
