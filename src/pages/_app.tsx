import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {useEffect} from "react";
import {router} from "next/client";
import { appWithTranslation } from "next-i18next";

const App = ({ Component, pageProps }: AppProps) => {

  return (
        <Component {...pageProps} />
  );
}

export default appWithTranslation(App);


