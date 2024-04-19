import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import About from './components/About';
// import ButtonClick from './components/ButtonClick';

// import About from './components/About';

function App() {
  const [mode,setMode]=useState('light');
  const [darkMode,setDarkMode]=useState('Enable Dark Mode')


  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='black';
      setDarkMode('Enable Light Mode')
    }else{
      setMode('light')
      document.body.style.backgroundColor='white';
      setDarkMode('Enable Dark Mode')
      
    }
  }

  return (
   <>
   <Navbar text='TextUtils' about='About Us' mode={mode} darkMode={darkMode} toggleMode={toggleMode}/>
   <Router>
    <Routes>
      <Route exact path='/' element={<TextForm heading='Enter the text to analyze below' mode={mode}/>}></Route>
      <Route exact path='/about' element={<About mode={mode}/>}></Route>
      </Routes>
   </Router>
   {/* <div className="container my-3 ">
    
   </div> */}
   {/* <ButtonClick/> */}
   </>
  );
}

export default App;

