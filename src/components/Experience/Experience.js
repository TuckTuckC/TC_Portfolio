import React from 'react'
import './Experience.css'

import jobs from '../../data/jobData';

function Experience() {
  return (
    <div className="flex flex-col items-center gap-20 md:mt-8">
        <h1 className='text-4xl text-gray-200'>My Experience</h1>
        {jobs.map((job, index) => (
            <div className="job p-4 rounded-md w-11/12 gap-10 md:w-8/12 h-max flex flex-col md:flex-row">
                <div className="pr-4 md:w-6/12 text-center">
                    <h1 className="text-2xl text-gray-300 text-right pb-4">{job.title}</h1>
                    <h1 className="text-2xl text-gray-300 text-right pb-4">{job.Dates}</h1>
                </div>
                <div className="md:w-6/12">
                    <p>{job.description}</p>
                    <ul className="flex flex-wrap gap-2 list-disc">
                    {job.Responsibilities.map((responsibility, index) => (
                        <li className="responsibility" key={index}>{responsibility}</li>
                    ))}
                    </ul>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Experience