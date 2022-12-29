import { ChakraProvider } from "@chakra-ui/react"
import AboutMe from "./components/AboutMe";
import ClimbingPhotography from "./components/ClimbingPhotography";
import LandingGalery from "./components/LandingGalery";
import Header from "./components/Header";
import Footer from "./components/Footer"
import Collaboration from "./components/Collaboration";
import ContactMe from "./components/ContactMe";
import Others from "./components/Others";

function App() {
  return (
    <ChakraProvider>
      <main>
        <Header />
        <LandingGalery />
        <ClimbingPhotography />
        <Others />
        <Collaboration />
        <AboutMe />
        <ContactMe />
        <Footer />
      </main>
    </ChakraProvider>
  );
}

export default App;
