import { FC, JSX } from 'react';
import { IResult } from '@/types';
import Image from 'next/image';
import styles from './SearchItem.module.scss'

interface ISearchItemProps {
  page: IResult
}

const SearchItem: FC<ISearchItemProps> = ({page}): JSX.Element => {
  return (
    <article className={styles.item}>
      <div className={styles.item__img}>
        {
          page.thumbnail && <Image src={page.thumbnail.source}
                                   alt={page.title}
                                   width={page.thumbnail.width}
                                   height={page.thumbnail.height}/>
        }
      </div>
      <div className={styles.item__content}>
        <h3 className={styles.item__title}>{page.title}</h3>
        <p>{page.extract}</p>
      </div>
    </article>
  );
};
export default SearchItem;
