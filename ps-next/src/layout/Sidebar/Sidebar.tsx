import { FC, JSX } from 'react';
import { ISidebarProps } from '@/layout/Sidebar/Sidebar.types';

const Sidebar: FC<ISidebarProps> = ({...other}): JSX.Element => {
  return (
    <div {...other}>
      Sidebar
    </div>
  );
};
export default Sidebar;
