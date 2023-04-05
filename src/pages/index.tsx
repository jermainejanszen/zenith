import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Zenith Garden Estate</title>
        <meta name="description" content="Frenchs Forest Sydney Australia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center"></main>
    </>
  );
};

export default Home;
