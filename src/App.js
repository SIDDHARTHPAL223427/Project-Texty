
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import { useState } from 'react';
import Alert from './Components/Alert';

function App() {
  const[mode,setMode]=useState("light")
  const[text,setText]=useState("Enable Dark Mode")
  const[alert,setAlert]=useState(null)

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
    
  }

  const toggleMode = () => {
    if (mode==="dark") {
      setMode("light")
      setText("Enable Dark Mode")
      document.body.style.backgroundColor="white"
      showAlert("Light mode is enabled","success")
      document.title="Texty - Light Mode"
    }
    else{
      setMode("dark")
      setText("Enable Dark Mode")
      document.body.style.backgroundColor="#13314a"
      showAlert("Dark mode is enabled","success")
      document.title="Texty - Dark Mode"

    }
  };

  return (
    <>     
      <Navbar title="Texty" mode={mode} toggleMode={toggleMode} text={text}/>
      <Alert alert={alert}/>
      <div className="container my-3">
          <TextForm heading="Enter The Text You Want To Transform" mode={mode} showAlert={showAlert}/>
      </div>
    </>
  );
}

export default App;
