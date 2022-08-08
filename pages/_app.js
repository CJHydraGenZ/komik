// import { wrapper, store } from "../store/store";
// import { Provider } from "react-redux";
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
    </Layout>
    // {/* </Provider> */ }
  );
}

export default MyApp;
// export default wrapper.withRedux(MyApp);
