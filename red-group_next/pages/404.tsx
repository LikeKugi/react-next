import { JSX } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import image from '@/public/404.png'
import Meta from '@/components/Meta/Meta';

const NotFound = (): JSX.Element => {
  const { replace } = useRouter();
  return (
    <>
      <Meta title="Not found" />
      <div>
        <h1>Oops... Not found</h1>
        <Image src={image}
               alt="not found"
               width={720}
               height={450}
               placeholder={'blur'}/>
        <button onClick={() => replace('/')}>Back to Main</button>
      </div>
    </>
  );
};
export default NotFound;
