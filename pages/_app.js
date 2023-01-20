// import { wrapper, store } from "../store/store";
// import { Provider } from "react-redux";
import { Analytics } from '@vercel/analytics/react';
import { Layout } from "components/layout/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {


  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  }

  return (
    // <Provider store={store}>
    <Layout>
      <Component {...pageProps} />
      <Analytics />
    </Layout>
    // {/* </Provider> */ }
  );
}

export default MyApp;
// export default wrapper.withRedux(MyApp);
