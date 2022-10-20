import { useContext } from 'react';
import { ThemeContext } from './contexts/ThemeContext';
import {  BrowserRouter, Route, Routes } from "react-router-dom";
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';


function App() {
  const { nightMode } = useContext(ThemeContext)
  
  return (
    <BrowserRouter>
      <div className={nightMode ? 'dark' : 'light'} >
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/aboutme' element={<Home />} />
          <Route exact path='/portfolio' element={<Portfolio />} />
          <Route exact path='/' element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;