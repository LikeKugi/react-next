import { FC, JSX } from 'react';
import { IParagraphProps } from '@/components/Paragraph/Paragraph.types';
import styles from './Paragraph.module.scss';
import { clsx } from 'clsx';

const Paragraph: FC<IParagraphProps> = ({
                                          children,
                                          variant = 'md',
                                          className,
                                          ...other
                                        }): JSX.Element => {
  return (
    <p className={
      clsx(className,
        styles.Paragraph,
        variant === 'sm' && styles['Paragraph--sm'],
        variant === 'md' && styles['Paragraph--md'],
        variant === 'lg' && styles['Paragraph--lg'],)
    } {...other}>
      {children}
    </p>
  );
};
export default Paragraph;
