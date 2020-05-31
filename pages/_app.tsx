import { AppProps } from "next/app";
import "./index.css";

export default ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};
