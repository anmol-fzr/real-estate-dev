import { useState } from 'react'
import Hero from '../components/Sections/Hero'
import About from '../components/Sections/About'
import Reviews from '../components/Sections/Reviews'
import Site from '../components/Sections/Site'



import layout from "../assets/images/layout/layout.webp"
import Modal, { formInputs } from '../components/Modal'
import useContactForm from '../hooks/useContactForm'
import Input from '../components/Input'
import Aminities from "../components/Sections/Aminities"

export default function Home({ openModal }) {
    const { register, handleSubmit, onSubmit, errors } = useContactForm({ close })
    const [ open, setOpen ] = useState(false)
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
                            <img src={layout} alt="" />
                        </div>
                    </div>
                </div>

                <section id='contact' className='container' >
                    <div className='flex flex-col max-w-screen-lg gap-2 mx-auto '  >
                        <h1 className="text-center capitalize h1 hero-title" >Contact us</h1>
                        <div className="flex items-center justify-between flex-1 w-full gap-12 mx-auto mb-20 -mt-6 bg-white sm:rounded-lg">
                            <div className="w-8/12 py-6 sm:py-12">
                                <div className="flex flex-col items-center">
                                    <div className="flex-1 w-full mt-6">
                                        <div className="flex flex-col w-full gap-4 mx-auto ">
                                            {formInputs.map(({ name, type, placeholder }) => (
                                                <Input error={errors[ name ]?.message} {...{ name, type, placeholder, register }} />
                                            ))}
                                            <button type='submit' className="mt-8 text-center btn">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col w-4/12 gap-6 py-6 sm:py-12">
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
                                        <a className=' text-primary/90' href="tel:+918827672022">+91 88276-72022</a>

                                    </p>
                                    <p className='flex items-start gap-2 font-medium'>
                                        <span className='' >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                            </svg>
                                        </span>
                                        <a className=' text-primary/90' href="tel:+918827672022">+91 88276-72022</a>

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
                                        <a className=' text-primary/90' href="mailto:Info@risinginfra.co.in" target='_blank' >Info@risinginfra.co.in</a>
                                    </p>
                                </div>
                                {/* <p className='flex items-center gap-2 text-lg font-medium '>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                        </svg>
                                    </span>
                                    Vimaan Vihar, NH-334D, Main, Tappal, Uttar Pradesh 202165
                                </p>
                                <p className='flex items-center gap-2 text-lg font-medium '>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
                                        </svg>
                                    </span>
                                    Vimaan Vihar, NH-334D, Main, Tappal, Uttar Pradesh 202165
                                </p> */}
                            </div>

                        </div>
                    </div>

                </section>
            </article>
        </main>

    )
}


{/* <section className="service" id="service">
                    <div className="container">
                        <p className="section-subtitle">Our Services</p>
                        <h2 className="h2 section-title">Our Main Focus</h2>
                        <ul className="service-list">
                            <li>
                                <div className="service-card">
                                    <div className="card-icon">
                                        <img src="./assets/images/service-1.png" alt="Service icon" />
                                    </div>
                                    <h3 className="h3 card-title">
                                        <a href="#">Buy a home</a>
                                    </h3>
                                    <p className="card-text">
                                        over 1 million+ homes for sale available on the website, we can
                                        match you with a house you will want to call home.
                                    </p>
                                    <a href="#" className="card-link">
                                        <span>Find A Home</span>
                                        <ion-icon name="arrow-forward-outline" />
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className="service-card">
                                    <div className="card-icon">
                                        <img src="./assets/images/service-2.png" alt="Service icon" />
                                    </div>
                                    <h3 className="h3 card-title">
                                        <a href="#">Rent a home</a>
                                    </h3>
                                    <p className="card-text">
                                        over 1 million+ homes for sale available on the website, we can
                                        match you with a house you will want to call home.
                                    </p>
                                    <a href="#" className="card-link">
                                        <span>Find A Home</span>
                                        <ion-icon name="arrow-forward-outline" />
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className="service-card">
                                    <div className="card-icon">
                                        <img src="./assets/images/service-3.png" alt="Service icon" />
                                    </div>
                                    <h3 className="h3 card-title">
                                        <a href="#">Sell a home</a>
                                    </h3>
                                    <p className="card-text">
                                        over 1 million+ homes for sale available on the website, we can
                                        match you with a house you will want to call home.
                                    </p>
                                    <a href="#" className="card-link">
                                        <span>Find A Home</span>
                                        <ion-icon name="arrow-forward-outline" />
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section> */}
{/* <section className="property" id="property">
                    <div className="container">
                        <p className="section-subtitle">Properties</p>
                        <h2 className="h2 section-title">Featured Listings</h2>
                        <ul className="property-list has-scrollbar">
                            <li>
                                <div className="property-card">
                                    <figure className="card-banner">
                                        <a href="#">
                                            <img
                                                src="./assets/images/property-1.jpg"
                                                alt="New Apartment Nice View"
                                                className="w-100"
                                            />
                                        </a>
                                        <div className="card-badge green">For Rent</div>
                                        <div className="banner-actions">
                                            <button className="banner-actions-btn">
                                                <ion-icon name="location" />
                                                <address>Belmont Gardens, Chicago</address>
                                            </button>
                                            <button className="banner-actions-btn">
                                                <ion-icon name="camera" />
                                                <span>4</span>
                                            </button>
                                            <button className="banner-actions-btn">
                                                <ion-icon name="film" />
                                                <span>2</span>
                                            </button>
                                        </div>
                                    </figure>
                                    <div className="card-content">
                                        <div className="card-price">
                                            <strong>$34,900</strong>/Month
                                        </div>
                                        <h3 className="h3 card-title">
                                            <a href="#">New Apartment Nice View</a>
                                        </h3>
                                        <p className="card-text">
                                            Beautiful Huge 1 Family House In Heart Of Westbury. Newly
                                            Renovated With New Wood
                                        </p>
                                        <ul className="card-list">
                                            <li className="card-item">
                                                <strong>3</strong>
                                                <ion-icon name="bed-outline" />
                                                <span>Bedrooms</span>
                                            </li>
                                            <li className="card-item">
                                                <strong>2</strong>
                                                <ion-icon name="man-outline" />
                                                <span>Bathrooms</span>
                                            </li>
                                            <li className="card-item">
                                                <strong>3450</strong>
                                                <ion-icon name="square-outline" />
                                                <span>Square Ft</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="card-footer">
                                        <div className="card-author">
                                            <figure className="author-avatar">
                                                <img
                                                    src="./assets/images/author.jpg"
                                                    alt="William Seklo"
                                                    className="w-100"
                                                />
                                            </figure>
                                            <div>
                                                <p className="author-name">
                                                    <a href="#">William Seklo</a>
                                                </p>
                                                <p className="author-title">Estate Agents</p>
                                            </div>
                                        </div>
                                        <div className="card-footer-actions">
                                            <button className="card-footer-actions-btn">
                                                <ion-icon name="resize-outline" />
                                            </button>
                                            <button className="card-footer-actions-btn">
                                                <ion-icon name="heart-outline" />
                                            </button>
                                            <button className="card-footer-actions-btn">
                                                <ion-icon name="add-circle-outline" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="property-card">
                                    <figure className="card-banner">
                                        <a href="#">
                                            <img
                                                src="./assets/images/property-2.jpg"
                                                alt="Modern Apartments"
                                                className="w-100"
                                            />
                                        </a>
                                        <div className="card-badge orange">For Sales</div>
                                        <div className="banner-actions">
                                            <button className="banner-actions-btn">
                                                <ion-icon name="location" />
                                                <address>Belmont Gardens, Chicago</address>
                                            </button>
                                            <button className="banner-actions-btn">
                                                <ion-icon name="camera" />
                                                <span>4</span>
                                            </button>
                                            <button className="banner-actions-btn">
                                                <ion-icon name="film" />
                                                <span>2</span>
                                            </button>
                                        </div>
                                    </figure>
                                    <div className="card-content">
                                        <div className="card-price">
                                            <strong>$34,900</strong>/Month
                                        </div>
                                        <h3 className="h3 card-title">
                                            <a href="#">Modern Apartments</a>
                                        </h3>
                                        <p className="card-text">
                                            Beautiful Huge 1 Family House In Heart Of Westbury. Newly
                                            Renovated With New Wood
                                        </p>
                                        <ul className="card-list">
                                            <li className="card-item">
                                                <strong>3</strong>
                                                <ion-icon name="bed-outline" />
                                                <span>Bedrooms</span>
                                            </li>
                                            <li className="card-item">
                                                <strong>2</strong>
                                                <ion-icon name="man-outline" />
                                                <span>Bathrooms</span>
                                            </li>
                                            <li className="card-item">
                                                <strong>3450</strong>
                                                <ion-icon name="square-outline" />
                                                <span>Square Ft</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="card-footer">
                                        <div className="card-author">
                                            <figure className="author-avatar">
                                                <img
                                                    src="./assets/images/author.jpg"
                                                    alt="William Seklo"
                                                    className="w-100"
                                                />
                                            </figure>
                                            <div>
                                                <p className="author-name">
                                                    <a href="#">William Seklo</a>
                                                </p>
                                                <p className="author-title">Estate Agents</p>
                                            </div>
                                        </div>
                                        <div className="card-footer-actions">
                                            <button className="card-footer-actions-btn">
                                                <ion-icon name="resize-outline" />
                                            </button>
                                            <button className="card-footer-actions-btn">
                                                <ion-icon name="heart-outline" />
                                            </button>
                                            <button className="card-footer-actions-btn">
                                                <ion-icon name="add-circle-outline" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="property-card">
                                    <figure className="card-banner">
                                        <a href="#">
                                            <img
                                                src="./assets/images/property-3.jpg"
                                                alt="Comfortable Apartment"
                                                className="w-100"
                                            />
                                        </a>
                                        <div className="card-badge green">For Rent</div>
                                        <div className="banner-actions">
                                            <button className="banner-actions-btn">
                                                <ion-icon name="location" />
                                                <address>Belmont Gardens, Chicago</address>
                                            </button>
                                            <button className="banner-actions-btn">
                                                <ion-icon name="camera" />
                                                <span>4</span>
                                            </button>
                                            <button className="banner-actions-btn">
                                                <ion-icon name="film" />
                                                <span>2</span>
                                            </button>
                                        </div>
                                    </figure>
                                    <div className="card-content">
                                        <div className="card-price">
                                            <strong>$34,900</strong>/Month
                                        </div>
                                        <h3 className="h3 card-title">
                                            <a href="#">Comfortable Apartment</a>
                                        </h3>
                                        <p className="card-text">
                                            Beautiful Huge 1 Family House In Heart Of Westbury. Newly
                                            Renovated With New Wood
                                        </p>
                                        <ul className="card-list">
                                            <li className="card-item">
                                                <strong>3</strong>
                                                <ion-icon name="bed-outline" />
                                                <span>Bedrooms</span>
                                            </li>
                                            <li className="card-item">
                                                <strong>2</strong>
                                                <ion-icon name="man-outline" />
                                                <span>Bathrooms</span>
                                            </li>
                                            <li className="card-item">
                                                <strong>3450</strong>
                                                <ion-icon name="square-outline" />
                                                <span>Square Ft</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="card-footer">
                                        <div className="card-author">
                                            <figure className="author-avatar">
                                                <img
                                                    src="./assets/images/author.jpg"
                                                    alt="William Seklo"
                                                    className="w-100"
                                                />
                                            </figure>
                                            <div>
                                                <p className="author-name">
                                                    <a href="#">William Seklo</a>
                                                </p>
                                                <p className="author-title">Estate Agents</p>
                                            </div>
                                        </div>
                                        <div className="card-footer-actions">
                                            <button className="card-footer-actions-btn">
                                                <ion-icon name="resize-outline" />
                                            </button>
                                            <button className="card-footer-actions-btn">
                                                <ion-icon name="heart-outline" />
                                            </button>
                                            <button className="card-footer-actions-btn">
                                                <ion-icon name="add-circle-outline" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="property-card">
                                    <figure className="card-banner">
                                        <a href="#">
                                            <img
                                                src="./assets/images/property-4.png"
                                                alt="Luxury villa in Rego Park"
                                                className="w-100"
                                            />
                                        </a>
                                        <div className="card-badge green">For Rent</div>
                                        <div className="banner-actions">
                                            <button className="banner-actions-btn">
                                                <ion-icon name="location" />
                                                <address>Belmont Gardens, Chicago</address>
                                            </button>
                                            <button className="banner-actions-btn">
                                                <ion-icon name="camera" />
                                                <span>4</span>
                                            </button>
                                            <button className="banner-actions-btn">
                                                <ion-icon name="film" />
                                                <span>2</span>
                                            </button>
                                        </div>
                                    </figure>
                                    <div className="card-content">
                                        <div className="card-price">
                                            <strong>$34,900</strong>/Month
                                        </div>
                                        <h3 className="h3 card-title">
                                            <a href="#">Luxury villa in Rego Park</a>
                                        </h3>
                                        <p className="card-text">
                                            Beautiful Huge 1 Family House In Heart Of Westbury. Newly
                                            Renovated With New Wood
                                        </p>
                                        <ul className="card-list">
                                            <li className="card-item">
                                                <strong>3</strong>
                                                <ion-icon name="bed-outline" />
                                                <span>Bedrooms</span>
                                            </li>
                                            <li className="card-item">
                                                <strong>2</strong>
                                                <ion-icon name="man-outline" />
                                                <span>Bathrooms</span>
                                            </li>
                                            <li className="card-item">
                                                <strong>3450</strong>
                                                <ion-icon name="square-outline" />
                                                <span>Square Ft</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="card-footer">
                                        <div className="card-author">
                                            <figure className="author-avatar">
                                                <img
                                                    src="./assets/images/author.jpg"
                                                    alt="William Seklo"
                                                    className="w-100"
                                                />
                                            </figure>
                                            <div>
                                                <p className="author-name">
                                                    <a href="#">William Seklo</a>
                                                </p>
                                                <p className="author-title">Estate Agents</p>
                                            </div>
                                        </div>
                                        <div className="card-footer-actions">
                                            <button className="card-footer-actions-btn">
                                                <ion-icon name="resize-outline" />
                                            </button>
                                            <button className="card-footer-actions-btn">
                                                <ion-icon name="heart-outline" />
                                            </button>
                                            <button className="card-footer-actions-btn">
                                                <ion-icon name="add-circle-outline" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section> */}


{/* <Reviews /> */ }
{/* <section className="blog" id="blog">
                    <div className="container">
                        <p className="section-subtitle">News &amp; Blogs</p>
                        <h2 className="h2 section-title">Leatest News Feeds</h2>
                        <ul className="blog-list has-scrollbar">
                            <li>
                                <div className="blog-card">
                                    <figure className="card-banner">
                                        <img
                                            src="./assets/images/blog-1.png"
                                            alt="The Most Inspiring Interior Design Of 2021"
                                            className="w-100"
                                        />
                                    </figure>
                                    <div className="blog-content">
                                        <div className="blog-content-top">
                                            <ul className="card-meta-list">
                                                <li>
                                                    <a href="#" className="card-meta-link">
                                                        <ion-icon name="person" />
                                                        <span>by: Admin</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="card-meta-link">
                                                        <ion-icon name="pricetags" />
                                                        <span>Interior</span>
                                                    </a>
                                                </li>
                                            </ul>
                                            <h3 className="h3 blog-title">
                                                <a href="#">The Most Inspiring Interior Design Of 2021</a>
                                            </h3>
                                        </div>
                                        <div className="blog-content-bottom">
                                            <div className="publish-date">
                                                <ion-icon name="calendar" />
                                                <time dateTime="2022-27-04">Apr 27, 2022</time>
                                            </div>
                                            <a href="#" className="read-more-btn">
                                                Read More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="blog-card">
                                    <figure className="card-banner">
                                        <img
                                            src="./assets/images/blog-2.jpg"
                                            alt="Recent Commercial Real Estate Transactions"
                                            className="w-100"
                                        />
                                    </figure>
                                    <div className="blog-content">
                                        <div className="blog-content-top">
                                            <ul className="card-meta-list">
                                                <li>
                                                    <a href="#" className="card-meta-link">
                                                        <ion-icon name="person" />
                                                        <span>by: Admin</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="card-meta-link">
                                                        <ion-icon name="pricetags" />
                                                        <span>Estate</span>
                                                    </a>
                                                </li>
                                            </ul>
                                            <h3 className="h3 blog-title">
                                                <a href="#">Recent Commercial Real Estate Transactions</a>
                                            </h3>
                                        </div>
                                        <div className="blog-content-bottom">
                                            <div className="publish-date">
                                                <ion-icon name="calendar" />
                                                <time dateTime="2022-27-04">Apr 27, 2022</time>
                                            </div>
                                            <a href="#" className="read-more-btn">
                                                Read More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="blog-card">
                                    <figure className="card-banner">
                                        <img
                                            src="./assets/images/blog-3.jpg"
                                            alt="Renovating a Living Room? Experts Share Their Secrets"
                                            className="w-100"
                                        />
                                    </figure>
                                    <div className="blog-content">
                                        <div className="blog-content-top">
                                            <ul className="card-meta-list">
                                                <li>
                                                    <a href="#" className="card-meta-link">
                                                        <ion-icon name="person" />
                                                        <span>by: Admin</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="card-meta-link">
                                                        <ion-icon name="pricetags" />
                                                        <span>Room</span>
                                                    </a>
                                                </li>
                                            </ul>
                                            <h3 className="h3 blog-title">
                                                <a href="#">
                                                    Renovating a Living Room? Experts Share Their Secrets
                                                </a>
                                            </h3>
                                        </div>
                                        <div className="blog-content-bottom">
                                            <div className="publish-date">
                                                <ion-icon name="calendar" />
                                                <time dateTime="2022-27-04">Apr 27, 2022</time>
                                            </div>
                                            <a href="#" className="read-more-btn">
                                                Read More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section> */}
{/* <section className="cta">
                    <div className="container">
                        <div className="cta-card">
                            <div className="card-content">
                                <h2 className="h2 card-title">Looking for a dream home?</h2>
                                <p className="card-text">
                                    We can help you realize your dream of a new home
                                </p>
                            </div>
                            <button className="btn cta-btn">
                                <span>Explore Properties</span>
                                <ion-icon name="arrow-forward-outline" />
                            </button>
                        </div>
                    </div>
                </section> */}