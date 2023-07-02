<<<<<<< HEAD
import { useState } from 'react'
import Hero from '../components/Sections/Hero'
import About from '../components/Sections/About'
import Reviews from '../components/Sections/Reviews'
import Site from '../components/Sections/Site'



import layout from "../assets/images/layout/layout.webp"
import Modal from '../components/Modal'


export default function Home() {
    const [ open, setOpen ] = useState(false)
=======
import React from 'react'
import Hero from '../components/Sections/Hero'
import About from '../components/Sections/About'
import doc from "../assets/svg/doc.svg"
import clock from "../assets/svg/clock.svg"
import key from "../assets/svg/key.svg"
import land from "../assets/svg/land.svg"
import money from "../assets/svg/money.svg"
import nature from "../assets/svg/nature.svg"
import park from "../assets/svg/park.svg"
import road from "../assets/svg/road.svg"
import wall from "../assets/svg/wall.svg"
import water from "../assets/svg/tap-water.svg"
import security from "../assets/svg/policeman.svg"
import Reviews from '../components/Sections/Reviews'

const amenties = [
    {
        icon: doc,
        text: 'immidiate registery'
    },
    {
        icon: clock,
        text: 'immidiate mutation apply'
    },
    {
        icon: key,
        text: 'immediate possession'
    },
    {
        icon: money,
        text: 'loan available'
    },
    {
        icon: money,
        text: 'loan available'
    },
    {
        icon: land,
        text: 'land use conversion'
    },
    {
        icon: wall,
        text: 'boundary wall'
    },
    {
        icon: nature,
        text: 'tree plantation'
    },
    {
        icon: park,
        text: 'parks'
    },
    {
        icon: road,
        text: 'wide roads'
    },
    {
        icon: security,
        text: '24x7 security'
    },
    {
        icon: water,
        text: 'water supply'
    },
]

export default function Home() {
>>>>>>> 0149959f9030f31351005e71c87dfef85fe3107c
    return (
        <main>
            <article>
                <Hero />
                <About />
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
<<<<<<< HEAD
                </section> */} 
                <Reviews />
                <Site />
                <div className="container">
                    <div className='mb-20 mt-28 ' >

                        <h2 className="h2 section-title">Our Aminities</h2>
                        <div >
                            <img src={layout} alt="" />
                        </div>
                    </div>
                </div>


=======
                </section> */}
                <section className="features">
                    <div className="container">
                        <h2 className="h2 section-title">Our Aminities</h2>
                        <ul className="features-list">
                            {amenties.map(({ icon, text }) => (
                                <li>
                                    <a href="#" className="features-card">
                                        <div className="card-icon">
                                            {/* {icon} */}
                                            <img src={icon} alt="" />
                                        </div>
                                        <h3 className="card-title capitalize">{text}</h3>
                                    </a>
                                </li>
                            ))}

                        </ul>
                    </div>
                </section>
>>>>>>> 0149959f9030f31351005e71c87dfef85fe3107c
                {/* <Reviews /> */}
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
            </article>
        </main>

    )
}
