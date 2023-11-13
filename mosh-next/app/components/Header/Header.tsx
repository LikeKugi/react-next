import React from 'react';
import Link from 'next/link';
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.header__link} href={'/'}>Home</Link><Link className={styles.header__link} href={'/users'}>Users</Link><Link className={styles.header__link} href={'/users/new'}>New User</Link>
    </header>
  );
};

export default Header;
