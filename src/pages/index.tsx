import Home from '@/components/home';
import MainLayout from '@/layout/mainLayout';
import Head from 'next/head';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Fianancial</title>
      </Head>
      <MainLayout>
        <Home />
      </MainLayout>
    </>
  );
}
