import { FC, JSX } from 'react';
import { IFooterProps } from '@/layout/Footer/Footer.types';
import { clsx } from 'clsx';
import styles from './Footer.module.scss'
import {format} from 'date-fns';
import Link from 'next/link';

const Footer: FC<IFooterProps> = ({children,className , ...other}): JSX.Element => {
  return (
    <footer className={clsx(className, styles.Footer)} {...other}>
      <Link className={styles.Footer__link} href={'/'} target={'_blank'}>OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены</Link>
      <Link className={styles.Footer__link} href={'/'} target={'_blank'}>Пользовательское соглашение</Link>
      <Link className={styles.Footer__link} href={'/'} target={'_blank'}>Политика конфиденциальности</Link>
    </footer>
  );
};
export default Footer;
