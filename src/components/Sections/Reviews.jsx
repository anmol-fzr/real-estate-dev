import { useRef } from 'react'
import Arrow from "../Arrow"
<<<<<<< HEAD
import metro from "../../assets/images/features/metro.jpg"
import airport from "../../assets/images/features/airport.jpg"
import movies from "../../assets/images/features/movies.jpg"
import study from "../../assets/images/features/study.jpg"
import hospital from "../../assets/images/features/hospital.jpg"
import club from "../../assets/images/features/club.jpg"
import cricket from "../../assets/images/features/circket.jpg"
import university from "../../assets/images/features/university.webp"
import f1 from "../../assets/images/features/f1.jpg"

const width = 400 + 16;

export const appreciations = [
    {
        image: metro,
        text: "metro station"
    },
    {
        image: movies,
        text: "Film City"
    },
    {
        image: study,
        text: "education hub"
    },
    {
        image: airport,
        text: "airport"
    },
    {
        image: hospital,
        text: "hospital"
    },
    {
        image: club,
        text: "clubhouse"
    },
    {
        image: cricket,
        text: "cricket stadium"
    },
    {
        image: university,
        text: "gautam buddha university"
    },
    {
        image: f1,
        text: "F1 track"
=======
const width = 320 + 16;


export const appreciations = [
    {
        text: "Marriage Rubru App and Web were a huge success, thanks to your exceptional design skills. The app and website's interface were user-friendly and aesthetically pleasing, making it easier for users to navigate and find what they need.",
        author: "Tushar Jagga",
        image: 'tushar',
        from: "Marriage Rubru App"
    },
    {
        text: "Teledream Patient and Doctor App would not have been possible without your impressive UI/UX design expertise. Your ability to create an intuitive and visually appealing interface allowed users to interact seamlessly with the app, enhancing the overall experience.",
        author: "Vijay Sheoran",
        image: 'vijay',
        from: "Teledream App"
    },
    {
        text: "Stark Messaging App was a masterpiece, thanks to your outstanding UI/UX design work. The app's design was elegant and user-friendly, making it easy for users to communicate effectively with each other.",
        author: "Ravi Sharma",
        image: 'ravi',
        from: "Stark Messaging App"
    },
    {
        text: "Ekta Mart E-commerce website was a massive success, and we owe it to your exceptional design work. The website's user interface was intuitive and visually appealing, creating a seamless and enjoyable shopping experience for customers.",
        author: "Sananda Dey",
        image: 'shananda',
        from: "Ekta Mart E-Commerce web"
    },
    {
        text: "Business Tracker Invoice Management app was an exceptional success, and we can't thank you enough for your brilliant UI/UX design work. The app's interface was user-friendly, visually appealing, and made it easier for users to manage their invoices.",
        author: "Vikram Singh",
        image: 'vikram',
        from: "Business Tracker Invoice Management app"
    },
    {
        text: "ALFA (Active Life For All) Fitness App was a masterpiece, and your UI/UX design skills played a significant role in its success. Your designs created an interactive and visually appealing experience that allowed users to enjoy the app's fitness features seamlessly.",
        author: "Vivek Singh ",
        image: 'vivek',
        from: "ALFA (Active Life For All)"
    },
    {
        text: "Kapees Secure Messaging App was a huge hit, thanks to your exceptional UI/UX design work. Your design skills allowed users to enjoy a secure messaging experience without compromising the app's aesthetic appeal.",
        author: "Vikramaditya Pandeya",
        image: 'vikramaditya',
        from: "Kapees Secure Messaging App",
    },
    {
        text: "Your design was creative and original, making the logo visually appealing and memorable.",
        author: "Divy Muni's",
        image: 'divyClient',
        from: "Divy Paper & Item Manufactures Logo"
>>>>>>> 0149959f9030f31351005e71c87dfef85fe3107c
    },
]

export default function Reviews() {
    const slider = useRef()

    function prevSlide() {
        if (slider.current.scrollLeft === 0) {
            slider.current.scrollBy({
                left: (width * appreciations.length),
                behavior: 'smooth'
            })
        }
        else {
            slider.current.scrollBy({
                left: -width,
                behavior: "smooth",
            })
        }

    }
    function nextSlide() {
        if (slider.current.scrollLeft >= slider.current.offsetWidth) {
            slider.current.scrollBy({
                left: -(width * appreciations.length),
                behavior: 'smooth'
            })
        }
        else {
            slider.current.scrollBy({
                left: width,
                behavior: "smooth",
            })
        }
    }


    return (
<<<<<<< HEAD
        <div className='container' >
            <div className='mb-20 mt-28 ' >
                <h2 className="h2 section-title ">
                    Features
                </h2>
                <div className='flex flex-wrap items-center justify-between w-full pb-4 mx-auto gap-y-6 scroll-smooth ' >
                    {appreciations.map(({ image, text }) => (
                        <div key={text} style={{ width: '375px', minWidth: '375px', maxWidth: '375px' }} className="flex-1 flex-grow h-full space-y-4 break-inside-avoid rounded-xl transition-bottom bg-gray-50 active:scale-95 border-light/25 font-dm" >
                            <article className="overflow-hidden !w-[375px] rounded-lg shadow-lg">
                                <a href="#">
                                    <img alt="Placeholder" className="block !w-[375px] h-[266px] object-cover" src={image} />
                                </a>
                                <header className="flex items-center justify-between p-2 leading-tight md:p-4">
                                    <h1 className="text-lg">
                                        <p className="text-black no-underline capitalize hover:underline" href="#">
                                            {text}
                                        </p>
                                    </h1>
                                </header>

                            </article>

                    </div>
                ))}
                </div>
=======
        <div className='max-w-screen-lg mx-auto w-full' >
            <div ref={slider} className='flex items-start gap-4 pb-4 my-12 overflow-x-scroll overflow-y-hidden h-96 scroll-smooth appreciations' >
                {appreciations.map(({ text, author, image, from }) => (
                    <div style={{ minWidth: "380px", }} className="h-full space-y-4 shadow-md break-inside-avoid rounded-xl transition-bottom bg-gray-50 hover:bg-white active:scale-95 active:shadow border-light/25 hover:shadow-lg font-dm hover:border-primary" >
                        <div className="relative flex flex-col items-center justify-between h-full p-8 bg-gray-100 rounded-md">
                            <div className='absolute bottom-0 inset-6' >
                                <p className="mb-6 leading-relaxed">{text}</p>
                            </div>
                            <div className="absolute flex flex-col items-center bottom-6 ">
                                <img className='rounded-full' src="https://i.imgur.com/yXOvdOSs.jpg" alt="" />
                                <span className="flex flex-col flex-grow ">
                                    <span className="text-xl font-medium text-primary title-font">
                                        {author}
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className={`flex theme-grid-gap `} >
                <PrevArrow onClick={prevSlide} />
                <NextArrow onClick={nextSlide} />
>>>>>>> 0149959f9030f31351005e71c87dfef85fe3107c
            </div>
        </div>
    )
}

function NextArrow({ onClick }) {
    return (
<<<<<<< HEAD
        <button name='next' aria-label='next' onClick={onClick} className={`absolute top-0 -left-8 cursor-pointer`} >
=======
        <button name='next' aria-label='next' onClick={onClick} className={`cursor-pointer`} >
>>>>>>> 0149959f9030f31351005e71c87dfef85fe3107c
            <Arrow />
        </button>
    )
}
function PrevArrow({ onClick }) {
    return (
<<<<<<< HEAD
        <button name='prev' aria-label='prev' onClick={onClick} className={`cursor-pointer   `} >
            <Arrow className={` `} />
=======
        <button name='prev' aria-label='prev' onClick={onClick} className={`cursor-pointer`} >
            <Arrow className={` rotate-180`} />
>>>>>>> 0149959f9030f31351005e71c87dfef85fe3107c
        </button>
    )
}

function Appreciation({ text, author, from, image }) {
    return (
        <div className={`flex flex-col w-80 h-full font-taile theme-bg theme-border `} >
            <div className={`flex flex-col  gap-4 h-96 p-4 border-b theme-border-color`} >
                <p className='font-light tracking-wider' >{text}</p>
            </div>
            <div className="flex items-center gap-4 px-3 h-28 " >
                <img loading="lazy" src={image} height='40' width='40' className='h-10 rounded-full animate-zoom bg-secondary aspect-square' alt={author} />
                <div>
                    <p className='font-bold' >{author}</p>
                    <p className='text-xs font-light ' >{from}</p>
                </div>
            </div>
        </div>

    )
}