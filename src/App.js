import { useState } from 'react';
import './App.css';
import Navbar from './MyComponents/Navbar';
import TextArea from './MyComponents/TextArea';
// import About from './MyComponents/About'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  const [mode, setMode] = useState('light')

  const toggleStyle = () => {
    if (mode === 'light') {
      setMode("dark")
      document.body.style.backgroundColor = 'black';
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      {/* <Router> */}
        <Navbar title={"TextUtils"} searchBar={true} Icon={true} mode={mode} toggleStyle={toggleStyle} />
        {/* <Routes> */}
          {/* <Route exact path="/" element={ */}
            <TextArea text={"Enter your text: "} mode={mode} />
          {/* }> */}
          {/* </Route> */}
          {/* <Route exact path='/about' element={ */}
            {/* <About/> */}
          {/* }></Route> */}
        {/* </Routes> */}
      {/* </Router> */}
    </>
  );
}

export default App;