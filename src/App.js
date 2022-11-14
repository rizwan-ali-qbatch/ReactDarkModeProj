// import logo from './logo.svg';

import { useState } from 'react';
import './App.css';
// import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import About from './Components/About';

function App() {
  const [mode,setMode] = useState("light");

  const toggleMode = () =>
  {
    if(mode === "light")
    {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(0 44 75)";
      document.body.style.color = "white";

    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }

  return (
    <>
    <Navbar title = "Rizwan App" searchBar = {false} mode = {mode} toggleMode = {toggleMode}/>
    {/* <strong><Alert alert="This is alert"/></strong> */}
    <div className="container my-3">
      <TextForm heading = "Enter the text to analyze below" UpperCase_btn="Convert to UpperCase" LowerCase_btn="Convert to LowerCase" clear_btn="Clear Text"/>
      {/* <About /> */}
    </div>
    </>
  );
}

export default App;
