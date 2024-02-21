import { FC, JSX } from 'react';
import { IMenuSecondLevelProps } from '@/components/MenuSecondLevel/MenuSecondLevel.types';
import styles from './MenuSecondLevel.module.scss';
import MenuThirdLevel from '@/components/MenuThirdLevel/MenuThirdLevel';
import { clsx } from 'clsx';
import { useRouter } from 'next/router';

const MenuSecondLevel: FC<IMenuSecondLevelProps> = ({ menu, route, openSecondLevelMenu }): JSX.Element => {

  const router = useRouter();

  const usedPath = router.asPath.split('/')[2];

  return (
    <div className={styles.MenuSecondLevel}>
      {menu.map(m => {
        if (m.pages.map(p => p.alias).includes(usedPath)) {
          m.isOpened = true;
        }
        return (
          <div key={m._id.secondCategory}>
            <div className={styles.MenuSecondLevel__item} onClick={() => openSecondLevelMenu(m._id.secondCategory)}>{m._id.secondCategory}</div>
            <div className={clsx(styles.MenuSecondLevel__submenu, m.isOpened && styles['MenuSecondLevel__submenu--open'])}>
              <MenuThirdLevel pages={m.pages}
                              route={route}/>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default MenuSecondLevel;
