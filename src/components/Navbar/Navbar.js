import React from 'react'
import TC from '../../images/TC_SVG.svg'

function Navbar() {
  return (
    <div className='bg-gray-500 p-3 h-16 flex flex-row items-center justify-evenly fixed inset-x-0 bottom-0 md:bottom-auto'>
        <img src={TC} className="w-16 p-3 text-white"></img>
        <div>About</div>
        <div>My Work</div>
        <div>Experience</div>
    </div>
  )
}

export default Navbar