import { JSX, PropsWithChildren } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Heading from '@/components/Heading';

const Layout = ({children}: PropsWithChildren): JSX.Element => {
  return (
    <>
      <Header><Heading text="next application" tag="h3"/></Header>
      {children}
      <Footer />
    </>
  );
};
export default Layout;
