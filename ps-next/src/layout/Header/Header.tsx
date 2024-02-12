import { FC, JSX } from 'react';
import { IHeaderProps } from '@/layout/Header/Header.types';

const Header: FC<IHeaderProps> = ({children, ...other}): JSX.Element => {
  return (
    <div {...other}>
      Header
    </div>
  );
};
export default Header;
