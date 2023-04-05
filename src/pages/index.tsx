import { type NextPage } from "next";
import Head from "next/head";
import SidebarWithHeader from "~/components/SideBar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Zenith Garden Estate</title>
        <meta name="description" content="Frenchs Forest Sydney Australia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen w-screen">
        <SidebarWithHeader>
          <></>
        </SidebarWithHeader>
      </main>
    </>
  );
};

export default Home;
