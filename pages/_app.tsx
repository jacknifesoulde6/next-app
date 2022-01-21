import "../styles/globals.css";
import type { AppProps } from "next/app";
// import LayoutErrorBoundary from "./layout/LayoutErrorBoundary";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <LayoutErrorBoundary>
    <Component {...pageProps} />
    // </LayoutErrorBoundary>
  );
}

export default MyApp;
