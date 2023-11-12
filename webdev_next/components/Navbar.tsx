import { JSX } from 'react';
import styles from '@/styles/Navbar.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import nextImg from '@/public/next.svg'

const enum Path {
  INDEX = '/',
  POSTS = '/posts',
  CONTACTS = '/contacts',
}

interface INavigation {
  id: number;
  title: string;
  path: string;
}

const navigation: INavigation[] = [
  {id: 1, title: 'Home', path: Path.INDEX},
  {id: 2, title: 'Posts', path: Path.POSTS},
  {id: 3, title: 'Contacts', path: Path.CONTACTS}
]

const Navbar = (): JSX.Element => {
  const {pathname} = useRouter();
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        Next js Course
        <Image src={nextImg} alt="next" width={150} height={50} />
      </div>
      <div className={styles.links}>
        {navigation.map((url) => <Link className={pathname === url.path ? styles.active : ''} href={url.path} key={url.id}>{url.title}</Link>)}
        <Link href="/contacts/contact">Dave</Link>
      </div>
    </nav>
  );
};
export default Navbar;
