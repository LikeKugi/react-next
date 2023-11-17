import { FC, JSX, PropsWithChildren } from 'react';
import Head from 'next/head';

const getTitle = (title: string) => `${title} | Next App`

const Meta: FC<PropsWithChildren<IMeta>> = ({title, description, children}): JSX.Element => {
  return (
    <Head>
      <title>{getTitle(title)}</title>
      {description ? (<>
        <meta name={"description"} content={description}/>
        <meta name={'og:title'} content={title}/>
        <meta name={'og:description'} content={description}/>
      </>) : <meta name={'robots'} content={'noindex nofollow'}/>}
      {children}
    </Head>
  );
};
export default Meta;
