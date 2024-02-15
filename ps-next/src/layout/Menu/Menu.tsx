import { JSX } from 'react';
import { useAppContext } from '@/context/AppContext';
import Link from 'next/link';
import { IFirstLevelMenuItem, ITopLevelCategory } from '@/types';
import CoursesIcon from '@/assets/icons/courses.svg';
import ServicesIcon from '@/assets/icons/services.svg';
import BooksIcon from '@/assets/icons/book.svg';
import ProductsIcon from '@/assets/icons/products.svg'

const firstLevelMenu: IFirstLevelMenuItem[] = [
  {route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: ITopLevelCategory.COURSES},
  {route: 'services', name: 'Сервисы', icon: <ServicesIcon />, id: ITopLevelCategory.SERVICES},
  {route: 'books', name: 'Книги', icon: <BooksIcon />, id: ITopLevelCategory.BOOKS},
  {route: 'products', name: 'Продукты', icon: <ProductsIcon />, id: ITopLevelCategory.PRODUCTS}
]

const Menu = (): JSX.Element => {

  const {menu, setMenu, firstCategory} = useAppContext();

  return (
    <div>
      <CoursesIcon />
      <ul>
        {menu && menu.map(m => (<li key={m._id.secondCategory}>
          <Link href={`/courses/${m._id.secondCategory}`}>{m._id.secondCategory}</Link>
        </li>))}
      </ul>
    </div>
  );
};
export default Menu;
