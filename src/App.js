import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Events from './components/Events';
import { EventsData } from './components/EventsData';
import Contact from './components/Contact';
import Campus from './components/Campus';
import Home from './components/Home';
import Team from './components/Team';
import Footer from './components/Footer';
function App() {
  return (
    <>
    <Navbar />
    <Home />
    <About />
    <Events slides={EventsData} />
    <Contact />
    <Campus />

    
    <Team />
    <Footer />
    </>
  );
}

export default App;
