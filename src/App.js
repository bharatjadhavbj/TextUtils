import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import About from './components/About';

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
      <div className="container my-3">
        <Routes>
          <Route path='/' element={<TextForm heading='TextUtils - Word Counter, Character Counter, Remove Extra Spaces' mode={mode}/>}/>
          <Route path='/about' element={<About mode={mode}/>}/>
        </Routes>
      </div>
    </Router>
  </>
  );
}

export default App;

