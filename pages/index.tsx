import { NextPage } from "next";
import Head from "next/head";

const IndexPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Github NextJs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hello World</h1>
    </>
  );
};

export default IndexPage;
