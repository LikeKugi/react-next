import { JSX } from 'react';
import Link from 'next/link';

const About = (): JSX.Element => {
  return (
    <div>
      <h1>About us</h1>
      {Array.from({length: 5}, (_, i) => (<Link href={`/about/${i}`} key={i}>Link {i}</Link>))}
    </div>
  );
};
export default About;

