import x from "../assets/svg/whatsapp.png"

export default function Wa() {
    return (
        <div className='relative ' >
            <a className='z-[999]' href="https://wa.me/+919990633353" target='_blank' >
                <img loading='lazy' src={x} className='fixed flex items-center w-12 h-12 p-2 rounded-full bg-secondary/25 bottom-[42vh] right-12' alt="whatsapp" />
                <div className='fixed w-12 h-12 duration-1000 rounded-full bottom-[42vh] bg-secondary  right-12' ></div>
            </a>
        </div>
    )
}
