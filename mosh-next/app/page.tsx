import Link from 'next/link';
import ProductCard from '@/app/components/ProductCard/ProductCard';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center
    p-24">
     <h1>Hello world</h1>
      <Link href={'/users'}>Users</Link>
      <ProductCard />
    </main>
  )
}
