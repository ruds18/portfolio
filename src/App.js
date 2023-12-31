import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Hero from './Components/Hero';
import Work from './Components/Work';
import About from './Components/About'
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Hero/>}   />
        </Routes>
      </BrowserRouter>
      <Work/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
