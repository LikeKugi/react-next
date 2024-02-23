import { FC, JSX } from 'react';
import { ISidebarProps } from '@/layout/Sidebar/Sidebar.types';
import Menu from '@/layout/Menu/Menu';
import LogoIcon from '@/assets/icons/owl-top.svg';
import styles from './Sidebar.module.scss'
import { clsx } from 'clsx';

const Sidebar: FC<ISidebarProps> = ({className, ...other}): JSX.Element => {
  return (
    <div className={clsx(className, styles.Sidebar)} {...other}>
      <LogoIcon className={styles.Sidebar__logo} />
      <div>поиск</div>
      <Menu />
    </div>
  );
};
export default Sidebar;
