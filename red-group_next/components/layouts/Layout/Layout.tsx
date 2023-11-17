import { FC, PropsWithChildren } from 'react';
import Header from '@/components/layouts/Header/Header';
import styles from './Layout.module.scss'
import dynamic from 'next/dynamic';

const DynamicFooter = dynamic(() => import('@/components/layouts/Footer/Footer'), {ssr: false})

const Layout: FC<PropsWithChildren<unknown>> = ({children}) => {
  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.page__content}>
        {children}
      </div>
      <DynamicFooter />
    </div>
  );
};
export default Layout;
