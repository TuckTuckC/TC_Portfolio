import React from 'react'
import './Work.css'

import projects from '../../data/projectData';

function Work() {
  return (
    <div className="about-container mt-20 w-full h-fit md:h-full text-lg flex flex-col justify-items-center items-center content-center justify-center md:w-6/12 md:h-full">
        {projects.map((project, index) => (
            <div className="p-4 border items-center w-11/12 gap-10 md:w-8/12 h-max flex flex-col md:flex-row">
                <div className="pr-4 md:w-6/12 text-center">
                    <h1 className="text-2xl">{project.name}</h1>
                    <img src={project.image} />
                    <div className="flex justify-evenly mt-2">
                        <a href={project.deployedUrl} target="_blank" className="cursor-pointer border rounded-md p-2">Deployed Site</a>
                        <a href={project.sourceCodeUrl} target="_blank" className="cursor-pointer border rounded-md p-2">Source Code</a>
                    </div>
                </div>
                <div className="md:w-6/12">
                    <p>{project.description}</p>
                    <h2 className="pt-6 text-2xl pb-4 text-center">Technologies</h2>
                    <ul className="flex flex-wrap gap-2">
                    {project.technologies.map((technology, index) => (
                        <li className="p-2 border rounded-md" key={index}>{technology}</li>
                    ))}
                    </ul>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Work