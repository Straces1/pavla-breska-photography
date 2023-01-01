import { ChakraProvider } from "@chakra-ui/react"
import AboutMe from "./components/AboutMe";
//import ClimbingPhotography from "./components/ClimbingPhotography";
import ClimbingPhotography2 from "./components/ClimbingPhotography2";
import LandingGalery from "./components/LandingGalery";
import Header from "./components/Header";
import Footer from "./components/Footer"
import Collaboration from "./components/Collaboration";
// import ContactMe from "./components/ContactMe";
import Others from "./components/Others";
import ContactMeSection from "./components/ContactMeSection";

function App() {
  return (
    <ChakraProvider>
      <main>
        <Header />
        <LandingGalery />
        {/* <ClimbingPhotography /> */}
        <ClimbingPhotography2 />
        <Others />
        <Collaboration />
        <AboutMe />
        {/* <ContactMe /> */}
        <ContactMeSection />
        <Footer />
      </main>
    </ChakraProvider>
  );
}

export default App;
