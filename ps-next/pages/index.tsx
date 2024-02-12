import HomePage from '@/pages/HomePage/HomePage';
import withLayout from '@/HOC/withLayout';


function Home() {
  return (
    <>
      <HomePage/>
    </>
  );
}

export default withLayout(Home);
