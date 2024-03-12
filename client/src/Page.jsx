import Property from './sections/Property';
import Services from './sections/Services';
import AboutUs from './sections/AboutUs';
import Reviews from './sections/Reviews';
import Contact from './sections/Contact';
import Home from "./pages/Home"
import Footer from './sections/Footer';

const Page = () => {
  return (
    <> 
            <Home /> 
            <Property /> 
            <Services />
            <AboutUs />
            <Reviews />
            <Contact />
            <Footer />
    </>
  )
}

export default Page