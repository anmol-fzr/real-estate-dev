import React from 'react'
import homeModel from "../../assets/hero-banner.png"

export default function Hero() {
    return (
        <section className="hero" id="home">
            <div className="container">
                <div className="hero-content">
                    {/* <p className="hero-subtitle">
                                <ion-icon name="home" />
                                <span>Real Estate Agency</span>
                            </p> */}
                    <h2 className="h1 hero-title capitalize ">residential plots available near Jewar international Airport</h2>
                    {/* <p className="hero-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                eiusmod tempor incididunt ut labore.
                            </p> */}
                    <button className="btn">Make An Enquiry</button>
                </div>
                <figure className="hero-banner">
                    <img
                        src={homeModel}
                        alt="Modern house model"
                        className="w-100"
                    />
                </figure>
            </div>
        </section>
    )
}
