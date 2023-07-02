import logo from "../../assets/logo.png"

import x from "../../assets/svg/phone-call.png"

const navigation = [
    {
        text: 'About us',
        to: '#about'
    },
    {
        text: 'Contact us',
        to: '#contact'
    },
];

export default function Navbar({ openModal }) {
    return (
        <>
            <div className="sticky top-0 w-full mx-auto shadow bg-white backdrop-blur z-[5]" >
                <nav className="flex flex-col items-center justify-between h-full max-w-screen-lg gap-4 p-4 py-6 mx-auto text-black sm:flex-row" >
                    <ul>
                        <li>
                            <a href='#home' >
                                <img src={logo} className="w-36" alt="logo" />
                            </a>
                        </li>
                    </ul>
                    {/* <div className="flex flex-col justify-between h-full gap-9 " > */}
                    {/* <ul className="flex gap-4" >
                            <div className='flex gap-2 ' >
                                <div className='flex gap-2' >
                                    <img src={x} className='h-6 ' alt="" />
                                    <a className='z-[5] underline' href="tel:+919818876254" >+91-9818876254</a>
                                </div>
                                <p className='font-semibold' >Questions? Give us a call</p>
                            </div>
                        </ul> */}
                    <ul className="flex gap-4" >
                        {navigation.map(({ to, text }) => (
                            <li key={to} >
                                <a href={to} className="capitalize" >
                                    {text}
                                </a>
                            </li>
                        ))}
                        <li>
                            <button onClick={openModal} className="capitalize"   >E Brochure</button>
                        </li>
                    </ul>
                    {/* </div> */}
                </nav>
            </div> 
        </>
    );
}