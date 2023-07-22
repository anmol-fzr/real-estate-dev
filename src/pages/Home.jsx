import Hero from '../components/Sections/Hero'
import About from '../components/Sections/About'
import Airplane from '../components/Sections/Airplane'
import Features from '../components/Sections/Features'
import Site from '../components/Sections/Site'
import Aminities from "../components/Sections/Aminities"
import Contact from '../components/Sections/Contact'
import Property from '../components/Sections/Property'
import Plan from '../components/Sections/Plan'




export default function Home() {
    // const { register, handleSubmit, onSubmit, errors } = useContactForm({ close })

    // function close() {
    // }

    return (
        <main>
            <article>
                <Hero />
                <About />
                <Airplane />
                <Property />
                <Site />
                <Aminities />
                <Features />
                <Plan />
                <Contact /> 
            </article>
        </main>
    )
}