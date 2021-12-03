
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import AboutMe from './pages/AboutMe/AboutMe';
import Projects from "./pages/Projects/Projects";
import Resume from "./pages/Resume/Resume";
import Contact from "./pages/Contact/Contact";


function App() {
  return (
    <Router>
      <Navbar />

      <Route exact path="/home">
        <AboutMe />
      </Route>
      <Route exact path="/projects">
        <Projects />
      </Route>
      <Route exact path="/resume">
        <Resume />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
    </Router>


  );
}

export default App;
