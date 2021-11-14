import './App.css';
import About from './components/About';
import Contact from './components/Contact'
import Footer from './components/Footer';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className="2xl:px-80 xl:px-60 lg:px-40 sm:px-20">
      <Intro/>
      <Projects/>
      <About/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;