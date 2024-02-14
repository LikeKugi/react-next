import { FC, JSX } from 'react';
import Layout from '@/layout/Layout/Layout';
import { IObject } from '@/types';

const withLayout = <T extends IObject>(Component: FC<T>) => {
  return function WithLayout (props: T): JSX.Element {
    return (<Layout>
      <Component {...props} />
    </Layout>);
  };
};
export default withLayout;
