import { FC, JSX } from 'react';
import { ICarData } from '@/types/car.types';
import Meta from '@/components/layouts/Meta/Meta';
import Card from '@/components/ui/Card/Card';
import styles from './Home.module.scss';

const Home: FC<ICarData> = ({payload}): JSX.Element => {
  return (
    <>
      <Meta title="Cars Catalog" description="red group youtube course">
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Meta>
      <main className={styles.home}>
        <h1>Cars Catalog</h1>
        <div className={styles.home__list}>
          {payload.length ? payload.map(item => <Card key={item.id} payload={item} />) : <div>Cars not found</div>}
        </div>
      </main>
    </>
  );
};
export default Home;
