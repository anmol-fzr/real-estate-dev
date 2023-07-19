import Hero from '../components/Sections/Hero'
import About from '../components/Sections/About'
import Reviews from '../components/Sections/Reviews'
import Site from '../components/Sections/Site'

import layout from "../assets/images/layout/layout.webp"
import useContactForm from '../hooks/useContactForm'
import Aminities from "../components/Sections/Aminities"
import Contact from '../components/Sections/Contact'



export default function Home({ openModal }) {
    const { register, handleSubmit, onSubmit, errors } = useContactForm({ close })

    function close() {
    }

    return (
        <main>
            <article>
                <Hero {...{ openModal }} />
                <About />
                <Reviews />
                <Site />
                <Aminities />
                <div className="container">
                    <div className='mb-20 mt-28 ' >
                        <h2 className="h2 section-title">Plan</h2>
                        <div >
                            <img loading='lazy' src={layout} alt="layout" />
                        </div>
                    </div>
                </div>
                <Contact /> 
            </article>
        </main>
    )
}