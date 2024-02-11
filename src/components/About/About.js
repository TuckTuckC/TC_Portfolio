import React from 'react';
import TC from '../../images/TC_SVG.svg'
import GitHub from '../../images/github-mark-white.svg'
import LinkedIn from '../../images/linkedin.svg'

function About({aboutRef}) {
  return (
    <section ref={aboutRef} id="about" smooth={true} duration={500} activeClass="active" className="md:pt-40 about-container text-lg flex flex-col items-center md:w-4/12 md:h-full">
      <img src={TC} className="w-3/12 p-3 text-white"></img>
      <h1 className="text-3xl text-gray-200 text-center">Tucker Craig</h1>
      <h2 className="text-2xl text-gray-200 text-center">Full-Stack Software Engineer</h2>

      
        <p className="w-9/12 pt-6">
            Hello! I'm Tucker Craig, a Software Engineer and Teaching Assistant at EdX, specializing in Full-Stack Development.
        </p>
            
        {/* <p className="w-9/12 pt-6">
            My drive in technology stems from a deep curiosity about every component and its workings. Beyond coding, my experience ranges from mentoring at EdX to creating IoT devices and undertaking extensive plumbing projects. This variety sharpens my problem-solving abilities and enhances my teamwork approach. Motivated by challenges, I aim to innovatively impact the world, drawing inspiration from pioneers like Gladys West, and striving to create technology that subtly yet significantly improves lives.
        </p> */}

        <p className="w-9/12 pt-6">
        Fueled by a passion for understanding the 'why' behind technology, I approach software engineering with meticulous curiosity and forward-thinking, crafting code that not only functions efficiently but anticipates future needs.
        </p>
        <h2 className="text-2xl pt-8 text-gray-200">Contact Me!</h2>
        <div className='flex flex-col pt-2'>
            <a href="mailto:tuckermcraig@gmail.com">TuckerMCraig@gmail.com</a>
            <a >(828) 318-6633</a>
            <div className="flex gap-4 pt-4 justify-center">
                <a className="h-10 w-10" href="https://github.com/TuckTuckC" target='_blank'>
                    <img src={GitHub} />
                </a>
                <a className="h-10 w-10" href="https://www.linkedin.com/in/tucker-m-craig/" target='_blank'>
                    <img src={LinkedIn} />
                </a>
            </div>
        </div>

    </section>
  );
}

export default About;
