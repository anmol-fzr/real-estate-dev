import React from 'react'
import x from "../../assets/svg/phone-call.png"

export default function Header() {
    return (
        <div className="sticky top-0 h-12 flex items-center  w-full mx-auto shadow bg-gray-100 backdrop-blur z-[5]" >
            <div className='container' >
                <div className='flex gap-2 ' >
                    <div className='flex gap-2' >
                        <img src={x} className='h-6 ' alt="" />
                        <a className='z-[5] underline' href="tel:+919818876254" >+91-9818876254</a>
                    </div>
                    <p className='font-semibold' >Questions? Give us a call</p>
                </div>
            </div>
        </div>
    )
}
