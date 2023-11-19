import styles from '@/styles/Home.module.css'
import Meta from '@/components/Meta/Meta';

export default function HomePage() {
  return (
    <>
      <Meta title="Next App" />
      <main className={styles.main}>
        <h1>Next js app</h1>
      </main>
    </>
  )
}

