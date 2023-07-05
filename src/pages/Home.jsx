import Hero from '../components/Sections/Hero'
import About from '../components/Sections/About'
import Reviews from '../components/Sections/Reviews'
import Site from '../components/Sections/Site'

import layout from "../assets/images/layout/layout.webp"
import { formInputs } from '../components/Modal'
import useContactForm from '../hooks/useContactForm'
import Input from '../components/Input'
import Aminities from "../components/Sections/Aminities"
import { PHONE, EMAIL } from '../utils/constants'



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
                            <img loading='lazy' src={layout} alt="" />
                        </div>
                    </div>
                </div>
                <section id='contact' className='container' >
                    <div className='flex flex-col max-w-screen-lg gap-2 mx-auto '  >
                        <h1 className="text-center capitalize h1 hero-title" >Contact us</h1>
                        <div className="flex flex-col items-center justify-between flex-1 w-full gap-12 mx-auto mb-20 -mt-6 bg-white md:flex-row sm:rounded-lg">
                            <div className="w-full py-6 md:w-8/12 md:py-12">
                                <div className="flex flex-col items-center">
                                    <div className="flex-1 w-full mt-6">
                                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full gap-4 mx-auto ">
                                            {formInputs.map(({ name, type, placeholder }) => (
                                                <Input key={name} error={errors[ name ]?.message} {...{ name, type, placeholder, register }} />
                                            ))}
                                            <button type='submit' className="mt-8 text-center btn">Submit</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col w-full gap-6 py-6 md:w-4/12 md:py-12">
                                <div className="flex flex-col items-start gap-2 ">
                                    <h3 className='text-xl font-medium uppercase ' >address</h3>
                                    <p className='flex items-start gap-2 font-medium '>
                                        <span className='mt-1' >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                            </svg>
                                        </span>
                                        Vimaan Vihar, NH-334D, Main, Tappal, Uttar Pradesh 202165
                                    </p>
                                </div>
                                <div className="flex flex-col items-start gap-2 ">
                                    <h3 className='text-xl font-medium uppercase' >Call us</h3>
                                    <p className='flex items-start gap-2 font-medium'>
                                        <span className='' >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                            </svg>
                                        </span>
                                        <a className=' text-primary/90' href={`tel:+91${PHONE}`} >+91 {PHONE.slice(0, 5) + "-" + PHONE.slice(5)}</a>
                                    </p>
                                </div>
                                <div className="flex flex-col items-start gap-2 ">
                                    <h3 className='text-xl font-medium uppercase' >mail</h3>
                                    <p className='flex items-start gap-2 font-medium'>
                                        <span className='' >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
                                            </svg>
                                        </span>
                                        <a className=' text-primary/90' href={`mailto:${EMAIL}`} target='_blank' >{EMAIL}</a>
                                    </p>
                                </div> 
                            </div>
                        </div>
                    </div>
                </section>
            </article>
        </main>
    )
}