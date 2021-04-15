
import About from './About';
import './App.css';
import BootCamp from './BootCamp';
import ComputerScience from './ComputerScience';
import CssBootcamp from './CssBootcamp';
import Footer from './Footer';

import Freebies from './Freebies';
import Header from './Header';
import JavaScriptBootCamp from './JavaScriptBootCamp';
import NewtoCoding from './NewtoCoding';
import ReactBootcamp from './ReactBootcamp';
import Section from './Section';
import Source from './Source';
import UnderSection from './UnderSection';
import VueJsBootcamp from './VueJsBootcamp';

function App() {
  return (
    <div className="App">
      <Header />
      <Section />
      <UnderSection />
      <Source />
      <BootCamp />
      <Freebies />
      <NewtoCoding />
      <CssBootcamp />
      <JavaScriptBootCamp />
      <ReactBootcamp />
      <ComputerScience />
      <VueJsBootcamp  />
      <About />
      <Footer />
    
      {/* <CssBootcamp /> */}

      
    </div>
  );
}

export default App;
