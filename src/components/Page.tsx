import Head from 'next/head';
import React, { ReactNode } from 'react';
//
interface Props {
  children: ReactNode;
  title: string;
}
//========================================//
export default function Page({ title, children }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </>
  );
}
