import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>AI Q&A App</title>
        <meta name="description" content="Ask questions, get AI answers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-8">AI Q&A App</h1>
        {/* Implement your Q&A interface here */}
      </main>
    </>
  );
};

export default Home;