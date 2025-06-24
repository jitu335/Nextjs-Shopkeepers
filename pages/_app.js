import '@/styles/globals.css'
//import '../styles/globals.css' 
import { DarkModeProvider } from '../context/DarkModeContext'
import SlowConnectionPopup from './components/SlowConnectionPopup';
import RouteChangeLoader from './components/RouteChangeLoader';

export default function App({ Component, pageProps }) {
  return (
    <DarkModeProvider>
    <SlowConnectionPopup/>
    <RouteChangeLoader/>
      <Component {...pageProps} />
    </DarkModeProvider>
  );
}  
