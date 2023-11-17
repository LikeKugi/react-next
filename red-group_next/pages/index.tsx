import { Anonymous_Pro } from 'next/font/google';
import Meta from '@/components/layouts/Meta/Meta';
import Home from '@/components/screens/Home/Home';
import { GetServerSideProps, NextPage } from 'next';
import { ICarData } from '@/types/car.types';
import { CarService } from '@/services/car.service';

const inter = Anonymous_Pro({ weight: '400', subsets: ['latin'] });

const HomePage: NextPage<ICarData> = ({ payload }) => {
  return (
    <>
      <Meta title="Main"
            description="red group youtube course">
        <meta name="viewport"
              content="width=device-width, initial-scale=1"/>
        <link rel="icon"
              href="/favicon.ico"/>
      </Meta>
      <div className={inter.className}>
       <Home payload={payload}/>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<ICarData> = async () => {

  const cars = await CarService.getAllCars();
  return {
    props: {
      payload: cars,
    },
  };

};

export default HomePage;
