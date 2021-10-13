import '../styles/globals.css'
import {useEffect} from "react";
import {StoreProvider} from "../utils/Store";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jsStyles = document.querySelector('#jss-server-side')

    if (jsStyles) {
      jsStyles.parentElement.removeChild(jsStyles)
    }
  }, [])


  return (<StoreProvider> <Component {...pageProps} /></StoreProvider>)
}

export default MyApp
