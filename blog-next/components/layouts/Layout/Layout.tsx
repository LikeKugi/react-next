import { FC, JSX, PropsWithChildren } from 'react';
import styles from './Layout.module.scss';
import {Roboto_Mono} from 'next/font/google'
import Navbar from '@/components/ui/Navbar/Navbar';

const font = Roboto_Mono({subsets: ['latin'], weight: ['400', '600']})

const Layout: FC<PropsWithChildren> = ({children}): JSX.Element => {
  return (
    <div className={`${styles.page} ${font.className}`}>
      <header>
        <Navbar />
      </header>
      <div className={styles.page__content}>{children}</div>
      <footer></footer>
    </div>
  );
};
export default Layout;
