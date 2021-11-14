import skills from "./skillsList"

const Skills = () => {
    return (
        <section className='px-5 flex flex-col pb-10 text-gray-800'>
            <h1 className='text-3xl sm:text-5xl font-semibold pb-5'>Tools</h1>
            <div className='grid grid-cols-2 text-2xl md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {
                    skills.map(({name, id})=>(
                        <h1 key={id} className='text-blue-900 text-opacity-80'>{name}</h1>
                    ))
                }
            </div>
        </section>
    )
}

export default Skills