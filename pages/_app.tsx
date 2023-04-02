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
      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-KE6PYKXC6P"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-KE6PYKXC6P');
        `}
      </Script>
    </Layout>
  );
}

export default MyApp;
