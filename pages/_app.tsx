import { Analytics } from "@vercel/analytics/react";
import { Layout } from "components/layout/Layout";
import Script from "next/script";
import type { AppProps } from "next/app";
import "../styles/globals.css";

// import { Analytics } from '@vercel/analytics/react';
// import { Layout } from "components/layout/Layout";
// import Script from 'next/script'
// import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  // if (Component.getLayout) {
  //   return Component.getLayout(<Component {...pageProps} />);
  // }

  return (
    <Layout>
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  );
}

export default MyApp;
