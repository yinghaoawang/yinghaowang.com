import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <Navbar />
      <div className='section-wrapper'>
        <Home />
        <Projects />
      </div>
    </>
  );
}

export default App;
