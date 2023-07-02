import logo from "../../assets/logo.png"

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
            <div className="sticky top-12 w-full mx-auto shadow bg-white backdrop-blur z-[5]" >
                <nav className="flex items-center justify-between max-w-screen-lg p-4 py-6 mx-auto text-black" >
                    <ul>
                        <li>
                            <a href='#home' >
                                <img src={logo} className="w-28" alt="logo" />
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