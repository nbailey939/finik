import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/globals.css';
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <div>
       <ThemeProvider defaultTheme="light" attribute="class"><Navbar />
       <div className="dark:bg-[#171a18]">
      <Component {...pageProps} />
      <Footer /> 
      </div>
      </ThemeProvider>
      

      
    </div>
  );
}

export default MyApp;
