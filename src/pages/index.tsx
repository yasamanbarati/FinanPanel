import Home from '@/components/pages/overviwe';
import MainLayout from '@/layout';
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
