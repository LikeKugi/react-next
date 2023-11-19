import '@/styles/globals.css'
import Layout from '@/components/layouts/Layout/Layout';
import { AppPropsWithLayout, NextPageWithLayout } from '@/types/types';

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = (Component as NextPageWithLayout).getLayout

  if (getLayout) {
    return <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
  }

  return <Layout><Component {...pageProps} /></Layout>
}
