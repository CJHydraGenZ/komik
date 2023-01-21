
import { Analytics } from '@vercel/analytics/react';
import { Layout } from "components/layout/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {


  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  }

  return (

    <Layout>
      <Component {...pageProps} />
      <Analytics />
    </Layout>

  );
}

export default MyApp;

