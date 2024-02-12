import { FC, JSX } from 'react';
import Layout from '@/layout/Layout/Layout';

const withLayout = <T extends Record<string, unknown>>(Component: FC<T>) => {
  return function WithLayout (props: T): JSX.Element {
    return (<Layout>
      <Component {...props} />
    </Layout>);
  };
};
export default withLayout;
