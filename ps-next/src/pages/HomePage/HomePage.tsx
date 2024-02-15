import { FC, JSX, useState } from 'react';
import Heading from '@/components/Heading/Heading';
import Button from '@/components/Button/Button';
import Paragraph from '@/components/Paragraph/Paragraph';
import Tag from '@/components/Tag/Tag';
import Rating from '@/components/Rating/Rating';
import { IHomePageProps } from '@/pages/HomePage/HomePage.types';

const HomePage: FC<IHomePageProps> = ({menu, firstCategory}): JSX.Element => {
  const [direction, setDirection] = useState<'right' | 'down'>('right');

  const [rating, setRating] = useState(1);

  const onRatingChange = (value: number) => {
    setRating(value);
  }

  return (
    <>
      <Button variant="ghost">button</Button>
      <Button variant="ghost"
              arrow={direction}
              onClick={() => direction === 'right' ? setDirection('down') : setDirection('right')}>button</Button>
      <Button variant="primary">Button</Button>
      <Heading>Heading 1</Heading>
      <Heading level={2}>Heading 2</Heading>
      <Paragraph>
        Some text
      </Paragraph>
      <Paragraph variant="sm">
        Small text
      </Paragraph>
      <Paragraph variant="lg">
        Big text
      </Paragraph>
      <Tag color="primary" size="sm">foo</Tag>
      <Tag color="red" size="md">foo</Tag>
      <Tag color="ghost" size="sm">foo</Tag>
      <Tag color="gray" size="sm">foo</Tag>
      <Tag color="green" size="sm">foo</Tag>
      <Tag color="green" href="/" size="sm">foo</Tag>
      <Tag color="gray" href="/" size="md">foo</Tag>

      <Rating rating={rating} setRating={onRatingChange} isEditable={true} />
    </>
  );
};
export default HomePage;
