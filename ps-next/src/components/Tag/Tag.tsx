import { FC, JSX } from 'react';
import { ITagProps } from '@/components/Tag/Tag.types';
import { clsx } from 'clsx';
import styles from './Tag.module.scss';

const Tag: FC<ITagProps> = ({ size = 'md', children, color = 'ghost', href, className, ...other }): JSX.Element => {
  return (
    <div className={clsx(
      className,
      styles.Tag,
      size === 'sm' && styles['Tag--sm'],
      size === 'md' && styles['Tag--md'],
      color === 'ghost' && styles['Tag--ghost'],
      color === 'red' && styles['Tag--red'],
      color === 'gray' && styles['Tag--gray'],
      color === 'green' && styles['Tag--green'],
      color === 'primary' && styles['Tag--primary'])} {...other}>
      {href ? <a href={href}>
        {children}
      </a> : <>{children}</>}
    </div>
  );
};
export default Tag;
