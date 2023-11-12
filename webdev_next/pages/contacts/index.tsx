import { JSX } from 'react';
import Heading from '@/components/Heading';
import Head from 'next/head';
import { IContact } from '@/types/contacts.types';
import Link from 'next/link';

export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data: IContact[] = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      contacts: data,
    }
  };
};

const Contacts = ({ contacts }: { contacts: IContact[] }): JSX.Element => {

  return (
    <>
      <Head>
        <title>Contacts</title>
      </Head>
      <div>
        <Heading text="Contacts: "/>
        <p>Contacts list</p>
        <ul>
          {contacts && contacts.map((contact) => (<li key={contact.id}>
            <Link href={`/contacts/${contact.id}`}>
              <strong>{contact.name}</strong>
            </Link>
          </li>))}
        </ul>
      </div>
    </>
  );
};
export default Contacts;
