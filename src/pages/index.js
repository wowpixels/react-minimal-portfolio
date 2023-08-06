import Head from 'next/head';
import React, { useState } from 'react';
import Greeting from '@/components/greeting';
import MyServices from '@/components/my-services';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Minimal Portfolio</title>
        <meta name="description" content="A simple portfolio site developed with ReactJS" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <main className="bg-white text-slate-700 dark:bg-slate-800">
        <Greeting darkMode={darkMode} setDarkMode={setDarkMode} />
        <MyServices />
      </main>
    </div>
  );
}
