import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Work from './components/Work/Work'
import Experience from './components/Experience/Experience'

function App() {
  return (
    <div className="App flex flex-col text-gray-400">
        <Navbar />
        <section id="section1" className="mb-20 md:px-20 md:pt-0 md:h-screen flex-grow flex flex-col md:mb-0 md:flex-row">
          <About />
          <div className="scrollable mt-20 pb-10 w-full h-fit gap-20 md:h-full text-lg flex flex-col md:mt-0 md:w-8/12 md:h-full md:overflow-auto">
            <Work />
            <Experience />
          </div>
        </section>
    </div>
  );
}

export default App;
