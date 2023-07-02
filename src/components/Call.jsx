import React from 'react'
import x from "../assets/svg/phone-call.png"

export default function Call() {
    return (
        <div className='relative ' >
            <a className='z-[5]' href="tel:+919818876254"   >
                <img src={x} className='fixed flex items-center w-12 h-12 p-2 rounded-full bg-secondary/25 bottom-24 right-8' alt="" />
            </a>
        </div>
    )
}   