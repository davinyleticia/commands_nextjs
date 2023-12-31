import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import '../styles/header.css';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }) {
  
  return(    <>
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </>)
}

export default MyApp
