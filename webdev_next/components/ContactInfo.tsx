import { JSX } from 'react';
import { IContact } from '@/types/contacts.types';
import Heading from '@/components/Heading';

const ContactInfo = ({contact}: {contact: IContact}): JSX.Element => {

  if (!contact) {
    return <Heading text="empty contact" tag="h2" />
  }
  const {name, email, address} = contact || {};
  const {street, suite, city, zipcode} = address;
  return (
    <div>
      <Heading text={name} tag="h3" />
      <div>
        <strong>Email: </strong> {email}
      </div>
      <div>
        <strong>Address: </strong> {`${street} ${suite} ${city} ${zipcode}`}
      </div>
    </div>
  );
};
export default ContactInfo;
