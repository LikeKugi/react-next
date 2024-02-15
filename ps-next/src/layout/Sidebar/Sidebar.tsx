import { FC, JSX } from 'react';
import { ISidebarProps } from '@/layout/Sidebar/Sidebar.types';
import Menu from '@/layout/Menu/Menu';

const Sidebar: FC<ISidebarProps> = ({...other}): JSX.Element => {
  return (
    <div {...other}>
      <Menu />
    </div>
  );
};
export default Sidebar;
