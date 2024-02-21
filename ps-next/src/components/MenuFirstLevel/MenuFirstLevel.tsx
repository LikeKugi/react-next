import { FC, JSX } from 'react';
import { IMenuFirstLevelProps } from '@/components/MenuFirstLevel/MenuFirstLevel.types';
import Link from 'next/link';
import styles from './MenuFirstLevel.module.scss';
import { clsx } from 'clsx';
import MenuSecondLevel from '@/components/MenuSecondLevel/MenuSecondLevel';

const MenuFirstLevel: FC<IMenuFirstLevelProps> = ({
                                                    firstLevelMenu,
                                                    firstCategory,
                                                    menu: outerMenu,
                                                    className,
                                                    openSecondLevelMenu,
                                                    ...other
                                                  }): JSX.Element => {
  return (
    <>
      {firstLevelMenu.map(menu => (
        <div key={menu.id}>
          <Link href={`/${menu.route}`}>
            <div className={clsx(className,
              styles.MenuFirstLevel,
              menu.id === firstCategory && styles['MenuFirstLevel--active'])} {...other}>{menu.icon}<span>{menu.name}</span>
            </div>
          </Link>
          {menu.id === firstCategory && <MenuSecondLevel menu={outerMenu}
                                                         route={menu.route}
                                                         openSecondLevelMenu={openSecondLevelMenu}/>}
        </div>
      ))}
    </>
  );
};
export default MenuFirstLevel;
