import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import About from './components/About';
import Menu from './components/Menu';
import Products from './components/Products';
import Comment from './components/Comment'
import Contact from './components/Contact';

function App() {
  return (
   <>
   <Navbar/>
   <Slider/>
   <About/>
   <Menu/>
   <Products/>
   <Comment/>
   <Contact/>

   </>
  );
}

export default App;
