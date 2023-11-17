import React, { FC } from 'react';
import { ISingleCarData } from '@/types/car.types';
import Meta from '@/components/layouts/Meta/Meta';
import Image from 'next/image';

const DetailCard: FC<ISingleCarData> = ({payload}) => {
  return (
    <>
      <Meta title={`${payload.name} - $ ${payload.price}`} description={`Car | ${payload.name}`}></Meta>
      <div>
        <Image src={payload.image} alt={payload.name} width={450} height={200} />
        <h1>{payload.name}</h1>
        <p>{payload.price}</p>
      </div>
    </>
  );
};

export default DetailCard;
