import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Construction from './components/Construction';

function App() {
  return (
    <>
      <Navbar />
      <div className='section-wrapper'>
        <Home />
        <Projects />
        <Construction />
      </div>
    </>
  );
}

export default App;
