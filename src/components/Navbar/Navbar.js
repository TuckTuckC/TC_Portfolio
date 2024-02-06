import React from 'react'
import TC from '../../images/TC_SVG.svg'

import {Link} from 'react-scroll'

function Navbar() {
  return (
    <div className='bg-gray-500 p-3 h-16 flex flex-row items-center justify-evenly fixed inset-x-0 bottom-0 md:bottom-auto md:hidden'>
        <img src={TC} className="w-16 p-3 text-white"></img>
        <Link to="section1">About</Link>
        <div>My Work</div>
        <div>Experience</div>
    </div>
  )
}

export default Navbar