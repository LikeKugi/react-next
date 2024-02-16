import { JSX } from 'react';
import { useAppContext } from '@/context/AppContext';
import { IFirstLevelMenuItem, ITopLevelCategory } from '@/types';
import CoursesIcon from '@/assets/icons/courses.svg';
import ServicesIcon from '@/assets/icons/services.svg';
import BooksIcon from '@/assets/icons/book.svg';
import ProductsIcon from '@/assets/icons/products.svg'
import MenuFirstLevel from '@/components/MenuFirstLevel/MenuFirstLevel';
import styles from './Menu.module.scss';

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
      <MenuFirstLevel firstLevelMenu={firstLevelMenu} firstCategory={firstCategory} menu={menu} />
    </div>
  );
};
export default Menu;
