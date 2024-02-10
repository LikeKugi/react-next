import { FC, JSX, PropsWithChildren } from 'react';
import { IHeadingProps, ITagType } from '@/components/Heading/Heading.types';
import styles from './Heading.module.scss'

const Heading: FC<PropsWithChildren<IHeadingProps>> = ({ level = 1, children }): JSX.Element => {
  let Tag: ITagType;
  switch (level) {
    case 1:
      Tag = 'h1';
      break;
    case 2:
      Tag = 'h2';
      break;
    case 3:
      Tag = 'h3';
      break;
    case 4:
      Tag = 'h4';
      break;
    case 5:
      Tag = 'h5';
      break;
    case 6:
      Tag = 'h6';
      break;
    default:
      Tag = 'h1';
      break;
  }
  return (
    <Tag className={styles.Heading}>
      {children}
    </Tag>
  );
};
export default Heading;
