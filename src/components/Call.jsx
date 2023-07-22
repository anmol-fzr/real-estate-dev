import x from "../assets/svg/phone-call.png"

export default function Call() {
    return (
        <div className='relative ' >
            <a className='z-[5]' href="tel:+919990633353"   >
                <img loading='lazy' src={x} className='fixed flex items-center w-12 h-12 p-2 rounded-full bg-secondary/25 bottom-[50vh] right-6' alt="call" />
                <div className='fixed w-12 h-12 duration-1000 rounded-full -z-[1] bottom-[50vh] bg-secondary  right-6' ></div>
            </a>
        </div>
    )
}