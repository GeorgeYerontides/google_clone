import Body from "@/components/Body";
import Header from "@/components/Header";
import Head from "next/head";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Google Clone</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta
          name="description"
          content="A google clone to practice NextJS 13"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Body/>
      <Footer/>

    </>
  );
}
