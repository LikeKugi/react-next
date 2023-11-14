import { FC, PropsWithChildren } from 'react';
import Header from '@/components/Header/Header';
import styles from './Layout.module.scss'

const Layout: FC<PropsWithChildren<unknown>> = ({children}) => {
  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.page__content}>
        {children}
      </div>
      <footer>Footer</footer>
    </div>
  );
};
export default Layout;
