import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
      <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Montserrat&family=Open+Sans:ital,wght@0,500;0,600;0,700;1,300&display=swap"
            rel="stylesheet" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>)
}
