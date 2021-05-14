import { AppProps } from "next/dist/next-server/lib/router/router";
import { useEffect, useState } from "react";
import { hello } from "@/helpers/test";

interface MyAppState {
  number: number;
  str: string;
}

function MyApp({ Component, pageProps }: AppProps) {
  const [state, setState] = useState<MyAppState>();
  useEffect(() => {
    hello()
  }, []);
  return <Component />;
}

export default MyApp;
