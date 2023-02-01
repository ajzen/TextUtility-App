import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';
import About from './components/About';

function  App() {
  return (
    <>
    <Navbar title="Text Utils Page" aboutText="aboutTextUtils"/>
    {/* <div className="container my-3">
      <TextForm heading="Enter text to analyse"/>
    </div>     */}
    <div className="container my-3">
      <About/>
    </div>  
    </>    
  );
}

export default App;
