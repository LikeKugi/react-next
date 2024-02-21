import { FC, JSX } from 'react';
import styles from './MenuThirdLevel.module.scss'
import { IMenuThirdLevelProps } from '@/components/MenuThirdLevel/MenuThirdLevel.types';
import Link from 'next/link';
import { clsx } from 'clsx';
import { useRouter } from 'next/router';

const MenuThirdLevel: FC<IMenuThirdLevelProps> = ({route, pages}): JSX.Element => {
  const router = useRouter();
  const usedRouter = router.asPath;
  return (
    <>
      {pages.map(page => (
        <Link key={`/${route}/${page.alias}`} href={`/${route}/${page.alias}`} className={clsx(
          styles.MenuThirdLevel, `/${route}/${page.alias}` === usedRouter && styles['MenuThirdLevel--active'])}
        >{page.category}</Link>
      ))}
    </>
  );
};
export default MenuThirdLevel;

