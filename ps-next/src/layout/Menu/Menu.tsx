import { JSX } from 'react';
import styles from './Menu.module.scss'
import { useAppContext } from '@/context/AppContext';
import Link from 'next/link';

const Menu = (): JSX.Element => {

  const {menu, setMenu, firstCategory} = useAppContext();

  return (
    <div>
      <ul>
        {menu && menu.map(m => (<li key={m._id.secondCategory}>
          <Link href={`/courses/${m._id.secondCategory}`}>{m._id.secondCategory}</Link>
        </li>))}
      </ul>
    </div>
  );
};
export default Menu;
