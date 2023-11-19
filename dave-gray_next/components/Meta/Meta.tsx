import { FC, JSX } from 'react';
import Head from 'next/head';

interface IMetaProps {
  title: string;
  description?: string;
}

const Meta: FC<IMetaProps> = ({title,description}): JSX.Element => {
  return (
    <>
      <Head>
        <title>{`${title || 'Index'} | Dave Gray YouTube Course`}</title>
        {description && <meta name="description"
               content={description}/>}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
};
export default Meta;
