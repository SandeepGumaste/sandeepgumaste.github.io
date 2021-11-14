import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const Footer = () => {
    return (
        <section className='px-5 py-2 md:text-2xl bg-blue-100 text-blue-900 text-opacity-75 rounded-t-lg '>
            <div className='flex items-center justify-center '>
                Built using &nbsp; <FaReact/> &nbsp; + &nbsp; <SiTailwindcss/> &nbsp; by Sandeep Gumaste
            </div>
            
        </section>
    )
}

export default Footer
