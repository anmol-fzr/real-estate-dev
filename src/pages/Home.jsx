import Hero from '../components/Sections/Hero'
import About from '../components/Sections/About'
import Airplane from '../components/Sections/Airplane'
import Features from '../components/Sections/Features'
import Site from '../components/Sections/Site'
import Aminities from "../components/Sections/Aminities"
import Contact from '../components/Sections/Contact'
import Property from '../components/Sections/Property'
import Plan from '../components/Sections/Plan'

import bg from "../assets/hero-lg.png"


export default function Home() {
    // const { register, handleSubmit, onSubmit, errors } = useContactForm({ close })

    // function close() {
    // }

    return (
        <main>
            <article>
                <div className='fixed inset-0 -z-[2] bg-black '>
                    <img className='object-cover w-screen h-screen opacity-75 image-bg' src={bg} alt="" />
                </div>
                <Hero />
                <About />
                <div className='bg-white' >
                <Airplane />
                </div>
                <Property />
                <div className='bg-white' >

                <Site />
                </div>
                <Aminities />
                <div className='bg-white' >
                <Features />
                </div>
                <Plan />
                <div className='bg-white' >

                <Contact /> 
                </div>
            </article>
        </main>
    )
}