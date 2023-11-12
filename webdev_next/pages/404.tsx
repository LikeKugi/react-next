import React, { useEffect } from 'react';
import Heading from '@/components/Heading';
import { useRouter } from 'next/router';
import Head from 'next/head';

const Error = () => {

  const router = useRouter();

  useEffect(() => {
    setTimeout(() => router.push('/'), 3000);
  }, [router])

  return (
    <div>
      <Head>
        Not found
      </Head>
      <Heading text="Oops" />
      <p>something went wrong ^_^</p>
    </div>
  );
};

export default Error;
