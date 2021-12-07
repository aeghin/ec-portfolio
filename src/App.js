
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import AboutMe from './pages/AboutMe/AboutMe';
import Projects from "./pages/Projects/Projects";
import Resume from "./pages/Resume/Resume";
import Contact from "./pages/Contact/Contact";
import Footer from "./pages/Footer/Footer";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Navbar />

      <Route exact path={["/", "/home"]}>
        <AboutMe />
      </Route>
      <Route exact path="/projects">
        <Projects />
      </Route>
      <Route exact path="/resume">
        <Resume />
      </Route>

      <Footer />

    </Router>


  );
}

export default App;
