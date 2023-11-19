import { JSX } from 'react';
import Link from 'next/link';
import { routes } from '@/routes/routes';
import { useRouter } from 'next/router';
import styles from './Header.module.scss';
import { Ubuntu_Mono } from 'next/font/google';

const font = Ubuntu_Mono({ subsets: ['latin'], weight: ['400'] });

const makeClasses = (currentPath: string, linkPath: string) => {
  if (currentPath === linkPath) {
    return `${styles.header__link} ${styles.active}`;
  }
  return styles.header__link;
};

const Header = (): JSX.Element => {

  const { pathname, asPath } = useRouter();

  return (
    <header className={`${styles.header} ${font.className}`}>
      <nav className={styles.header__nav}>
        <ul className={styles.header__list}>
          {routes.map(route => <li className={styles.header__list}
                                   key={route.path}><Link className={makeClasses(pathname, route.path)}
                                                          href={route.path} >{route.description}</Link></li>)}

          <li className={makeClasses(`/users?q=bar`, asPath)}>
            <Link href={{pathname: '/users', query: { q: 'bar' }}}>Users with query link</Link>
          </li>
        </ul>

      </nav>
    </header>
  );
};
export default Header;
