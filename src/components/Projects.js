import React from 'react'
import projectslist from './ProjectList'
const Projects = () => {

    return (
        <section className='px-5 flex flex-col pb-10 text-gray-800'>
            <h1 className='text-3xl sm:text-5xl font-semibold pb-5 sm:pb-10'>Projects</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-5'>
                {
                    projectslist.map((project)=>{
                        const{id,name,tech,info,live,github} = project;
                        return(
                            <div key={id} className="bg-blue-50 flex flex-col justify-between p-5 rounded-lg text-blue-900 text-opacity-75 lg:max-w-2xl hover:bg-white border border-opacity-0 hover:border-blue-600 transform hover:scale-105 hover:shadow-xl transition-all duration-500" >
                                <div>
                                    <h1 className='font-light text-5xl pb-2 ' >{name}</h1>
                                    <h2 className='font-medium text-xl pb-2'>{tech}</h2>
                                    <p>{info}</p>
                                </div>
                                <div className=" flex flex-col pt-5 text-center">
                                    <div className='flex justify-between mb-2'>
                                        <a href={live} className='px-2 py-1 bg-blue-200 border border-blue-600 rounded text-blue-600 text-opacity-80 hover:bg-blue-100'>Live site</a>
                                        <a href={github} className='px-2 py-1 bg-blue-200 border border-blue-600 rounded text-blue-600 text-opacity-80 hover:bg-blue-100'>Github repo</a>
                                    </div>
                        {/*<a href={github} className='px-2 py-1 w bg-blue-200 border border-blue-600 rounded text-blue-600 text-opacity-80 hover:bg-blue-100'>My Learnings</a>*/}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Projects
