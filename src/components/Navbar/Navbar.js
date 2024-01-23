import React from 'react'

function Navbar() {
  return (
    <div className='bg-gray-300 p-3 flex flex-row justify-evenly fixed inset-x-0 bottom-0 md:bottom-auto'>
        <div>TC</div>
        <div>About</div>
        <div>My Work</div>
        <div>Skills</div>
        <div>Resume</div>
    </div>
  )
}

export default Navbar