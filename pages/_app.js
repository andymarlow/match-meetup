import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  const { asPath } = useRouter();
  const isHome = /\/\#/g.test(asPath) || asPath === "/" ? true : false;

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <>
        {!isHome && <Navbar />}
        <Component {...pageProps} />
      </>
    </ThemeProvider>
  );
}

export default MyApp;
