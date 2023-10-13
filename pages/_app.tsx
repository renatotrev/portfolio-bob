import Layout from "@/app/components/layout";
import Transitions from "@/app/components/transitions";
import "@/styles/globals.css";
import "@/styles/transition.css";
import Head from "next/head";

function App({ Component, pageProps }: { Component: any, pageProps: any}) {
  return (
    <main className='max-w-[320px] xl:max-w-screen-xl m-auto h-screen'>
      <Head>
        <title>▶ Portfolio - Guilherme Anjos - Web Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Transitions>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Transitions>
    </main>
  );
}

export default App;
