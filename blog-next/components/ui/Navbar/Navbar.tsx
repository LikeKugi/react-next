import { JSX } from 'react';
import styles from './Navbar.module.scss';
import { routes } from '@/routes/routes';
import Link from 'next/link';
import { useRouter } from 'next/router';

const makeLinkClassName = (linkPath: string, currentPath: string) => {
  if (linkPath === currentPath) {
    return `${styles.nav__link} ${styles.active}`;
  }
  return styles.nav__link;
};

const Navbar = (): JSX.Element => {

  const { pathname } = useRouter();

  return (
    <nav className={styles.nav}>
      <div className={styles.nav__wrapper}>
        <div>
          {routes.map(route => <Link className={makeLinkClassName(route.path, pathname)}
                                     key={route.path}
                                     href={route.path}>{route.description}</Link>)}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
