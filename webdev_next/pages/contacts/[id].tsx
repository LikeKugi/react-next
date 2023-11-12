import { JSX } from 'react';
import Head from 'next/head';
import ContactInfo from '@/components/ContactInfo';
import { IContact } from '@/types/contacts.types';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id;
  console.log(id)
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data: IContact = await response.json();
  console.log(data)
  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      contact: data,
    }
  };
};

const Contact = ({contact} : {contact: IContact}): JSX.Element => {
  console.log(contact)
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <div>
        <ContactInfo contact={contact} />
      </div>
    </>
  );
};
export default Contact;
