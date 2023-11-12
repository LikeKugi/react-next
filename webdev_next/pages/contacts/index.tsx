import { JSX, useEffect, useState } from 'react';
import Heading from '@/components/Heading';
import Head from 'next/head';

const Contacts = (): JSX.Element => {
  const [contacts, setContacts] = useState(null);

  useEffect(() => {
    const fetchData = async () => {}
  }, [])

  return (
    <>
      <Head>
        <title>Contacts</title>
      </Head>
      <Heading text="Contacts: " />
      <p>Contacts list</p>
    </>
  );
};
export default Contacts;
