import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Hello You!</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
