import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Construction from './components/Construction';
import Experience from './components/Experience';

function App() {
  return (
    <>
      <Navbar />
      <div className='section-wrapper'>
        <Home />
        <Experience />
        <Projects />
        <Construction />
      </div>
    </>
  );
}

export default App;
