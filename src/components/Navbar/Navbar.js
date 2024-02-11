import React from 'react'
import TC from '../../images/TC_SVG.svg'

import {Link} from 'react-scroll'

function Navbar({executeScroll, aboutRef, workRef, expRef}) {
  return (
    <div className='bg-gray-500 p-3 h-16 flex flex-row items-center justify-evenly fixed inset-x-0 bottom-0 md:hidden'>
        <img src={TC} className="w-16 p-3 text-white"></img>
        <div onClick={() => executeScroll(aboutRef)}>About</div>
        <div onClick={() => executeScroll(workRef)}>My Work</div>
        <div onClick={() => executeScroll(expRef)}>Experience</div>
    </div>
  )
}

export default Navbar