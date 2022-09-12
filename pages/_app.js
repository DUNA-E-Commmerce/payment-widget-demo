import "../styles/globals.css";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src="https://staging-cdn.getduna.com/payment-widget/v0.1/index.js" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
