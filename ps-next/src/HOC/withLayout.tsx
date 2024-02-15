import { FC, JSX } from 'react';
import Layout from '@/layout/Layout/Layout';
import { IObject } from '@/types';
import AppContextProvider from '@/context/AppContext/AppContextProvider';
import { IAppContext } from '@/context/AppContext';

const withLayout = <T extends IObject & IAppContext>(Component: FC<T>) => {
  return function WithLayout(props: T): JSX.Element {
    return (
      <AppContextProvider menu={props.menu}
                          firstCategory={props.firstCategory}>
        <Layout>
          <Component {...props} />
        </Layout>
      </AppContextProvider>
    );
  };
};
export default withLayout;
