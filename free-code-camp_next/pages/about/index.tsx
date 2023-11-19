import { JSX } from 'react';
import Link from 'next/link';

const AboutPage = (): JSX.Element => {
  return (
    <div>
      <h1>About us</h1>
      <Link href={'/'}>Main</Link>
    </div>
  );
};
export default AboutPage;
