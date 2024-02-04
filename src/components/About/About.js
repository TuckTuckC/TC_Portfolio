import React from 'react';
import TC from '../../images/TC_SVG.svg'

function About() {
  return (
    <div className="about-container text-lg flex flex-col items-center justify-center md:w-5/12 md:h-full">
      <img src={TC} className="w-2/12 p-3 text-white"></img>
      <h1 className="text-3xl text-gray-200">Tucker Craig</h1>
      <h2 className="text-2xl text-gray-200">Full-Stack Software Engineer</h2>

      
        <p className="w-9/12 pt-6">
            Hello! I'm Tucker Craig, a Software Engineer and Teaching Assistant at EdX, specializing in Full-Stack Development.
        </p>
            
        {/* <p className="w-9/12 pt-6">
            My drive in technology stems from a deep curiosity about every component and its workings. Beyond coding, my experience ranges from mentoring at EdX to creating IoT devices and undertaking extensive plumbing projects. This variety sharpens my problem-solving abilities and enhances my teamwork approach. Motivated by challenges, I aim to innovatively impact the world, drawing inspiration from pioneers like Gladys West, and striving to create technology that subtly yet significantly improves lives.
        </p> */}

        <p className="w-9/12 pt-6">
        Fueled by a passion for understanding the 'why' behind technology, I approach software engineering with meticulous curiosity and forward-thinking, crafting code that not only functions efficiently but anticipates future needs.
        </p>
        <div className="p-2">Contact</div>
    </div>
  );
}

export default About;
