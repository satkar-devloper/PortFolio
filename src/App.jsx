import { Toaster } from "react-hot-toast";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import PortFolio from "./components/PortFolio";

function App() {
  return (
    <>
    <div>
    <Navbar/>
    <Home/>
    <About/>
    <PortFolio/>
    <Footer/>
    <Contact/>
    </div>
    <Toaster />



    </>
  )
}

export default App;

