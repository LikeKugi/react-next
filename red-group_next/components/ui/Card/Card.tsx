import React, { FC, JSX } from 'react';
import { ISingleCarData } from '@/types/car.types';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Card.module.scss';

const Card: FC<ISingleCarData> = ({payload}): JSX.Element => {
  return (
    <div className={styles.card}>
      <Image className={styles.card__img} src={payload.image} alt={payload.name} width={200} height={120} />
      <h2 className={styles.card__title}>{payload.name}</h2>
      <p>${payload.price}</p>

      <Link href={`/car/${payload.id}`}>Read more</Link>
    </div>
  );
};
export default Card;
