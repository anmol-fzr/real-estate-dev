import Hero from '../components/Sections/Hero'
import About from '../components/Sections/About'
import Reviews from '../components/Sections/Reviews'
import Site from '../components/Sections/Site'

import layout from "../assets/images/layout/layout.webp"
// import useContactForm from '../hooks/useContactForm'
import Aminities from "../components/Sections/Aminities"
import Contact from '../components/Sections/Contact'
import Property from '../components/Sections/Property'



export default function Home() {
    // const { register, handleSubmit, onSubmit, errors } = useContactForm({ close })

    // function close() {
    // }

    return (
        <main>
            <article>
                <Hero />
                <About />
                <Reviews />
                <Site />
                <Aminities />
                <Property />
                <div className="container">
                    <div className='mb-20 mt-28 ' >
                        <h2 className="h2 section-title">Plan</h2>
                        <div >
                            <img loading='lazy' src={layout} width={1280} height={989} alt="layout" />
                        </div>
                    </div>
                </div>
                <Contact /> 
            </article>
        </main>
    )
}