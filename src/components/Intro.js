import React from 'react'

const Intro = () => {
    return (
        <div className='px-5 py-8'>
            <div className='flex flex-col text-gray-800'>
                <h1 className='text-4xl sm:text-6xl md:text-7xl tracking-wider font-lato font-semibold'>Sandeep <span className='font-light'>Gumaste</span></h1>
                <a href="mailto:sandeepgumaste10@gmail.com" className='text-xl sm:text-2xl tracking-wider text-gray-400 pt-2'>sandeepgumaste10@gmail.com</a>
                <p className='text-lg sm:text-3xl md:text-5xl md:pt-10 font-light pt-4'>Hi! I'm a front-end web developer.<br/>Welcome to my portfolio</p>
            </div>
            {/*<div className ='pt-5 flex flex-row text-center'>
                <a href="#resume" className='px-2 py-1 bg-blue-200 border border-blue-600 rounded text-blue-600 text-opacity-80 hover:bg-blue-100'>Download Resume</a>

    </div>*/}
        </div>
    )
}

export default Intro
