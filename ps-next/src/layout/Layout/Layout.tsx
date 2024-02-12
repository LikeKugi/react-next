import { FC, JSX } from 'react';
import { ILayoutProps } from '@/layout/Layout/Layout.types';
import Sidebar from '@/layout/Sidebar/Sidebar';
import Header from '@/layout/Header/Header';
import Footer from '@/layout/Footer/Footer';

const Layout: FC<ILayoutProps> = ({children}): JSX.Element => {
  return (
    <>
      <Header />
      <div>
        <Sidebar />
        <div>
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Layout;
