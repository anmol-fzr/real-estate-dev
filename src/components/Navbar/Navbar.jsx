import { useEffect } from "react";
import logo from "../../assets/logo.webp"
import useStore from "../../store/store";

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

export default function Navbar() {
    const openModal = useStore(state => state.openModal)

    useEffect(() => {
        const t = setTimeout(openModal, 1500)
        return () => clearTimeout(t)
    }, [])

    return (
        <>
            <div className="sticky top-0 w-full mx-auto shadow bg-white backdrop-blur z-[5]" >
                <nav className="flex flex-col items-center justify-between h-full max-w-screen-lg gap-4 p-4 py-6 mx-auto text-black sm:flex-row" >
                    <ul>
                        <li>
                            <a href='#home' >
                                <img loading='lazy' width={250} height={190} src={logo} className="w-36" alt="logo" />
                            </a>
                        </li>
                    </ul> 
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
                </nav>
            </div> 
        </>
    );
}