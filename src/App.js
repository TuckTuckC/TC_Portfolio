import './App.css';
import {useRef} from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Work from './components/Work/Work'
import Experience from './components/Experience/Experience'

function App() {
  const aboutRef = useRef(null)
  const workRef = useRef(null)
  const expRef = useRef(null)

  const executeScroll = (ref) => ref.current.scrollIntoView()

  return (
    <div className="App flex flex-col text-gray-400">
        <Navbar executeScroll={executeScroll} aboutRef={aboutRef} workRef={workRef} expRef={expRef} />
        <section id="section1" className="mb-20 md:px-20 md:pt-0 md:h-screen flex-grow flex flex-col md:mb-0 md:flex-row">
          <About aboutRef={aboutRef} />
          <div className="scrollable mt-20 pb-10 w-full h-fit gap-20 md:h-full text-lg flex flex-col md:mt-0 md:w-8/12 md:h-full md:overflow-auto">
            <Work workRef={workRef} />
            <Experience expRef={expRef} />
          </div>
        </section>
    </div>
  );
}

export default App;
