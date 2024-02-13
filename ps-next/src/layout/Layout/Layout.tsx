import { FC, JSX } from 'react';
import { ILayoutProps } from '@/layout/Layout/Layout.types';
import Sidebar from '@/layout/Sidebar/Sidebar';
import Header from '@/layout/Header/Header';
import Footer from '@/layout/Footer/Footer';
import styles from './Layout.module.scss'
import { Noto_Sans_KR } from "next/font/google";

const font = Noto_Sans_KR({ subsets: ["latin"] });

const Layout: FC<ILayoutProps> = ({ children }): JSX.Element => {
  return (
    <div className={`${styles.Layout} ${font.className}`}>
      <Header className={styles.Layout__header}/>
      <Sidebar className={styles.Layout__sidebar}/>
      <div className={styles.Layout__body}>
        {children}
      </div>
      <Footer className={styles.Layout__footer}/>
    </div>
  );
};
export default Layout;
