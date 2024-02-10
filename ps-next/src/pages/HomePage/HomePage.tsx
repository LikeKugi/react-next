import { JSX, useState } from 'react';
import Heading from '@/components/Heading/Heading';
import Button from '@/components/Button/Button';

const HomePage = (): JSX.Element => {
  const [direction, setDirection] = useState<'right' | 'down'>('right');
  return (
    <>
      <Button variant="ghost">button</Button>
      <Button variant="ghost"
              arrow={direction}
              onClick={() => direction === 'right' ? setDirection('down') : setDirection('right')}>button</Button>
      <Button variant="primary">Button</Button>
      <Heading>Heading 1</Heading>
      <Heading level={2}>Heading 2</Heading>
    </>
  );
};
export default HomePage;
