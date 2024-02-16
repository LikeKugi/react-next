import { FC, JSX } from 'react';
import { IMenuSecondLevelProps } from '@/components/MenuSecondLevel/MenuSecondLevel.types';
import styles from './MenuSecondLevel.module.scss';
import MenuThirdLevel from '@/components/MenuThirdLevel/MenuThirdLevel';
import { clsx } from 'clsx';

const MenuSecondLevel: FC<IMenuSecondLevelProps> = ({ menu, route }): JSX.Element => {
  return (
    <div className={styles.MenuSecondLevel}>
      {menu.map(m => (
        <div key={m._id.secondCategory}>
          <div className={styles.MenuSecondLevel__item}>{m._id.secondCategory}</div>
          <div className={clsx(styles.MenuSecondLevel__submenu, m.isOpened && styles['MenuSecondLevel__submenu--open'])}>
            <MenuThirdLevel pages={m.pages} route={route}/>
          </div>
        </div>
      ))}
    </div>
  );
};
export default MenuSecondLevel;
