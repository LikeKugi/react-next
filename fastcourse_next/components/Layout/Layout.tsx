import { FC, JSX, PropsWithChildren } from 'react';
import Header from '@/components/Header/Header';
import { Roboto_Mono } from 'next/font/google'
import styles from './Layout.module.scss';

const font = Roboto_Mono({ subsets: ['latin'] })

const Layout: FC<PropsWithChildren> = ({children}): JSX.Element => {
  return (
    <>
      <Header />
      <div className={`${styles.container} ${font.className}`}>
        {children}
      </div>
    </>
  );
};
export default Layout;
