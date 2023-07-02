import { useRef } from 'react'
import Arrow from "../Arrow"
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
            </div>
        </div>
    )
}

function NextArrow({ onClick }) {
    return (
        <button name='next' aria-label='next' onClick={onClick} className={`absolute top-0 -left-8 cursor-pointer`} >
            <Arrow />
        </button>
    )
}
function PrevArrow({ onClick }) {
    return (
        <button name='prev' aria-label='prev' onClick={onClick} className={`cursor-pointer   `} >
            <Arrow className={` `} />
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