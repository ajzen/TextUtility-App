import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';

function  App() {

  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null)

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light")
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is on", "info");
    } else {
      setMode("dark")
      document.body.style.backgroundColor = "#212529";
      showAlert("Dark mode is on", "info");
    }
  }

  const showAlert = (message, type) => {
    
    setAlert({
      msg : message,
      type : type
    });

    setTimeout(() => setAlert(null), 1500);
  }

  return (
    <>
    <Navbar title="Text Utils Page" mode = {mode} toggleMode={toggleMode} aboutText="aboutTextUtils"/>
    <Alert alert={alert}/>
    <div className="container my-3">
      <TextForm heading="Enter text to analyse" mode = {mode} toggleMode={toggleMode} showAlert={showAlert}/>
    </div>    
    <div className="container my-3">
      <About mode = {mode} toggleMode={toggleMode}/>
    </div>  
    
    </>    
  );
}

export default App;
