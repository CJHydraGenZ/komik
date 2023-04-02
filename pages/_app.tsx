import { Analytics } from "@vercel/analytics/react";
import { Layout } from "components/layout/Layout";
// import Script from "next/script";
import GoogleAnalytics from "@bradgarropy/next-google-analytics";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { Partytown } from "@builder.io/partytown/react";
import Script from "next/script";

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
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5156335750859862"
        crossOrigin="anonymous"
      />

      <GoogleAnalytics measurementId="G-KE6PYKXC6P" />
      {
        /* <Partytown debug={true} forward={["dataLayer.push"]} />
      <Script
        defer
        src="https://static.cloudflareinsights.com/beacon.min.js"
        data-cf-beacon='{"token": "f7f7486a92b9427ab52dde99f0bfe70a"}'
        type="text/partytown"
      /> */
      }
      <Layout>
        <Component {...pageProps} />
        <Analytics />
        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      </Layout>
    </>
  );
}

export default MyApp;
