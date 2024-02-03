import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Work from './components/Work/Work'

function App() {
  return (
    <div className="App flex flex-col text-gray-300">
        <Navbar />
        <div className="mb-20 md:pt-20 md:h-screen flex-grow flex flex-col md:mb-0 md:flex-row">
          <About />
          <Work />
        </div>
    </div>
  );
}

export default App;
