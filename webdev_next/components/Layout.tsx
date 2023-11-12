import { JSX, PropsWithChildren } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Layout = ({children}: PropsWithChildren): JSX.Element => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
export default Layout;
