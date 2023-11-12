import { FC, JSX } from 'react';

interface IHeaderProps {
  text: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4'
}

const Heading: FC<IHeaderProps> = ({text, tag}): JSX.Element => {
  const Tag = tag || 'h1'
  return (
    <Tag>
      {text}
    </Tag>
  );
};
export default Heading;
