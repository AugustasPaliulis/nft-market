import "../styles/globals.css";
import NavBar from "../components/navbar";
import Layout from "../components/layout";
import { AuthUserProvider } from "../context/AuthUserContext";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AuthUserProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthUserProvider>
    </>
  );
}

export default MyApp;
