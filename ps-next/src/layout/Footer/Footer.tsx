import { FC, JSX } from 'react';
import { IFooterProps } from '@/layout/Footer/Footer.types';

const Footer: FC<IFooterProps> = ({children, ...other}): JSX.Element => {
  return (
    <div {...other}>
      Footer
    </div>
  );
};
export default Footer;
