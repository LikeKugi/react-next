import { JSX } from 'react';
import Link from 'next/link';
import styles from './Header.module.scss';
import { Red_Hat_Display } from 'next/font/google';
import { useRouter } from 'next/router';

const font = Red_Hat_Display({ subsets: ['latin'], weight: ['400', '600'] });

const makeLinkClassName = (pathname: string, linkHref: string) => {
  if (pathname === linkHref) {
    return `${styles.header__link} ${styles.active}`;
  }

  return styles.header__link;
};

const Header = (): JSX.Element => {

  const router = useRouter();

  return (
    <header className={`${styles.header} ${font.className}`}>
      <nav className={styles.header__nav}>
        <ul className={styles.header__list}>
          <li className={styles.header__item}><Link className={makeLinkClassName(router.pathname, '/')}
                                                    href={'/'}>Main</Link></li>
          <li className={styles.header__item}><Link className={makeLinkClassName(router.pathname, '/about')}
                                                    href={'/about'}>About</Link></li>
          <li className={styles.header__item}><Link className={makeLinkClassName(router.pathname, '/posts')}
                                                    href={'/posts'}>Posts</Link></li>
          <li className={styles.header__item}><Link className={makeLinkClassName(router.pathname, '/form')}
                                                    href={'/form'}>Form</Link></li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
