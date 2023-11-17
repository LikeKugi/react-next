import React, { JSX } from 'react';
import { GetServerSideProps,  NextPage } from 'next';
import { ISingleCarData } from '@/types/car.types';
import DetailCard from '@/components/ui/DetailCard/DetailCard';
import { CarService } from '@/services/car.service';
import Meta from '@/components/layouts/Meta/Meta';
import Link from 'next/link';

const CarPage: NextPage<ISingleCarData> = ({ payload }): JSX.Element => {

  return (
    <>
      <Meta title={'Car'} description={`Car | Car`}></Meta>
      <div>
        <h2>Car Page</h2>
        <DetailCard payload={payload}/>
        <Link href={'/'} >Back</Link>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<ISingleCarData> = async (context) => {

  const id = context.params?.id
  const car = await CarService.getCarById(`${id}`);

  return {
    props: {
      payload: car,
      revalidate: 60,
    },
  };
}

export default CarPage;
