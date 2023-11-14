import { JSX } from 'react';
import Link from 'next/link';
import { RoutesConstants } from '@/constants/RoutesConstants';
import styles from './Header.module.scss';
import { useRouter } from 'next/router';


const Header = (): JSX.Element => {
  const { pathname } = useRouter();

  const makeClasses = (path: RoutesConstants) => pathname === path ? `${styles.header__link} ${styles.active}` : styles.header__link;

  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <Link className={makeClasses(RoutesConstants.INDEX)}
              href={RoutesConstants.INDEX}>Home</Link>
        <Link className={makeClasses(RoutesConstants.ABOUT)}
              href={RoutesConstants.ABOUT}>About page</Link>
      </div>
    </header>
  );
};
export default Header;
