import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';

function  App() {

  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light")
      document.body.style.backgroundColor = "white";
    } else {
      setMode("dark")
      document.body.style.backgroundColor = "#212529";
    }
  }

  return (
    <>
    <Navbar title="Text Utils Page" mode = {mode} toggleMode={toggleMode} aboutText="aboutTextUtils"/>
    <div className="container my-3">
      <TextForm heading="Enter text to analyse" mode = {mode} toggleMode={toggleMode}/>
    </div>    
    <div className="container my-3">
      <About mode = {mode} toggleMode={toggleMode}/>
    </div>  
    </>    
  );
}

export default App;
