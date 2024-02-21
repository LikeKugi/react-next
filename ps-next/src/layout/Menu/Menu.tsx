import { JSX } from 'react';
import { useAppContext } from '@/context/AppContext';
import MenuFirstLevel from '@/components/MenuFirstLevel/MenuFirstLevel';
import styles from './Menu.module.scss';
import { useRouter } from 'next/router';
import { firstLevelMenu } from '@/utils/firstLevelMenu';



const Menu = (): JSX.Element => {

  const { menu, setMenu, firstCategory } = useAppContext();

  const openSecondLevel = (secondCategory: string) => {
    if (setMenu) {
      setMenu(menu.map(m => {
        m.isOpened = m._id.secondCategory === secondCategory;
        return m;
      }));
    }
  };

  return (
    <div>
      <MenuFirstLevel firstLevelMenu={firstLevelMenu}
                      firstCategory={firstCategory}
                      menu={menu}
                      openSecondLevelMenu={openSecondLevel}/>
    </div>
  );
};
export default Menu;
