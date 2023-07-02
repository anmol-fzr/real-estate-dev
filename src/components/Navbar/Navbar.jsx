import { Link, Outlet } from "react-router-dom";
import logo from "../../assets/logo.png"
import pdf from "../../assets/brochure.pdf"

const navigation = [
    {
        text: 'About us',
        to: '#about'
    },
    {
        text: 'Contact us',
        to: '/contact-us'
    },
];

export default function Navbar({ openModal }) {
    return (
        <>
            <div className="sticky top-0 w-full mx-auto shadow bg-white backdrop-blur z-[5]" >
<<<<<<< HEAD
                <nav className="flex items-center justify-between max-w-screen-lg p-4 py-6 mx-auto text-black" >
=======
                <nav className="flex items-center justify-between p-4 py-6 mx-auto  text-black max-w-screen-lg" >
>>>>>>> 0149959f9030f31351005e71c87dfef85fe3107c
                    <ul>
                        <li>
                            <a href='#home' >
                                <img src={logo} className="w-20" alt="logo" />
                            </a>
                        </li>
                    </ul>
                    <ul className="flex gap-4" >
                        {navigation.map(({ to, text }) => (
<<<<<<< HEAD
                            <li key={to} >
=======
                            <li>
>>>>>>> 0149959f9030f31351005e71c87dfef85fe3107c
                                <a href={to} className="capitalize" >
                                    {text}
                                </a>
                            </li>
                        ))}
                        <li>
                            <button onClick={openModal} className="capitalize"   >E Brochure</button>
                        </li>
                    </ul>
                </nav>
            </div>
            <Outlet />
        </>
    );
}