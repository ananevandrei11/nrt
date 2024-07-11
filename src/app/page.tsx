import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <nav>
        <Link href="/slider-css" className="text-3xl text-lime-600 hover:text-lime-700 hover:underline">
          Slider CSS
        </Link>
      </nav>
    </main>
  );
}
