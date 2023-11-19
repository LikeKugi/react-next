import { JSX } from 'react';
import Meta from '@/components/Meta/Meta';
import Form from '@/components/Form/Form';
import { NextPageContext } from 'next';

const FormPage = ({token}: {token: string}): JSX.Element => {
  return (
    <>
      <Meta title="Form Page" />
      <Form initial={token}/>
    </>
  );
};

FormPage.getInitialProps = async ({ req }: NextPageContext) => {
  console.log(req)
  if (req) {
    // server
    return { token: '' };
  } else {
    // client
    const token = localStorage.getItem("chakra-ui-color-mode");
    return { token };
  }
};
export default FormPage;
