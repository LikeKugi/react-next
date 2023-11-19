import { FC, JSX, PropsWithChildren } from 'react';
import { Roboto_Mono } from 'next/font/google'
import styles from './Layout.module.scss';
import Header from '@/components/ui/Header/Header';

const font = Roboto_Mono({ subsets: ['latin'] })

const Layout: FC<PropsWithChildren> = ({children}): JSX.Element => {
  return (
    <div className={`${styles.layout} ${font.className}`}>
      <Header />
      <div className={styles.layout__content}>{children}</div>
      <footer>
        footer info
      </footer>
    </div>
  );
};
export default Layout;
