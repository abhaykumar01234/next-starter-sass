import Layout from "../components/Layout";
import "../styles/global.scss";

import { Provider } from "react-redux";
import { useStore } from "../redux/store";

function MyComponent({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyComponent;
