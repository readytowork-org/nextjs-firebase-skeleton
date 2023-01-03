import React from "react";
import { AppProps } from "next/app";
import { GlobalStyles } from "../utils";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({ defaultOptions: {} });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
