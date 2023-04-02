import { Analytics } from "@vercel/analytics/react";
import { Layout } from "components/layout/Layout";
// import Script from "next/script";
import GoogleAnalytics from "@bradgarropy/next-google-analytics";
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
    <>
      <GoogleAnalytics measurementId="G-KE6PYKXC6P" />
      <Layout>
        <Component {...pageProps} />
        <Analytics />
        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      </Layout>
    </>
  );
}

export default MyApp;
