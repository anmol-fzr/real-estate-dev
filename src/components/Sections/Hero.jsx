import React from 'react'
import homeModel from "../../assets/hero-banner.png"
import hero from "../../assets/hero/hero.jpg"

export default function Hero({ openModal }) {
    return (
        <section className="relative hero !bg-cover  z-[4]  !bg-no-repeat !bg-[url(https://i.imgur.com/FysKIN2.jpg)] " id="home">
            {/* <img className='absolute z-[-1]  top-0 left-0' src={hero} alt="" /> */}


            <div className="container pb-36 z-[5]"  >
                <div className=" hero-content">
                    <h2 className="!text-white   capitalize h1 hero-title ">residential plots available near Jewar international Airport</h2>
                    <h2 className="   capitalize text-3xl ml-2 mb-4 !text-white ">9990633353</h2>
                    <button onClick={openModal} className="btn">Make An Enquiry</button>
                </div>
                {/* <figure className="hero-banner">
                    <img
                        src={hero}
                        alt="Modern house model"
                        className="w-100"
                    />
                </figure> */}
            </div>

        </section>
    )
}
