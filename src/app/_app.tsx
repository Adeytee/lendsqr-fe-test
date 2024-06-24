import React from 'react';
import type { AppProps } from 'next/app';

// ** Global css styles
import './globals.scss';

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
