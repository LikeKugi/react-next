import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <header>this is header</header>
      <Component {...pageProps} />
      <footer>this is footer</footer>
    </>
    )

}
