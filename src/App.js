import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Menu from './pages/Menu';
import about from "../src/pages/About";
import Contact from './pages/Contact';
import { HashRouter as Router,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
     <Router>
     <Navbar />
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/menu' Component={Menu} />
        <Route path='/about' Component={about} />
        <Route path='/contact' Component={Contact} />



      </Routes>
      <Footer />
     </Router>
    </div>
  );
}

export default App;
