
const About = () => {
    return (
        <section className='px-5 pb-10 text-gray-800'>
            <div className='flex flex-col '>
                <h1 className='text-3xl sm:text-5xl font-semibold pb-5'>About</h1>
                <p className='text-xl sm:text-2xl md:text-3xl font-light text-left'>Hi! I'm a self taught passionate FrontEnd developer.<br/>As a curious person and I've always been interested in making/building things which is why I love solving problems. I love developing elegant, user friendly and responsive frontends.<br/>When I'm not coding, I make art. </p>
            </div>
            <div className='mt-3'>
                <a href="https://www.instagram.com/sandeep_gumaste/?hl=en" className='px-2 py-1 bg-blue-200 border border-blue-600 rounded text-blue-600 text-opacity-80 hover:bg-blue-100' target='_blank' rel='noreferrer'>See my work</a>
            </div>
        </section>
    )
}

export default About
