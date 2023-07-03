import x from "../../assets/svg/phone-call.png"
export default function Header() {
    return (
        <div className="sticky top-0  p-2 w-full bg-gray-100 z-[5]" >
            <div className='container ' >
                <div className='flex flex-col gap-2 mx-auto md:mr-0 md:flex-row w-fit' >
                    <div className='flex gap-2 '  >
                        <img loading='lazy' src={x} className='h-6 ' alt="" />
                        <a className='z-[5] underline' href="tel:+919990633353" >+91 99906-33353</a>
                    </div>
                    <p className='font-semibold' >Questions? Give us a call</p>
                </div>
            </div>
        </div>
    )
}
