import { useRef } from 'preact/hooks'
import Arrow from "../Arrow"
import image1 from "../../assets/images/site/1.webp"
import image2 from "../../assets/images/site/2.webp"
import image3 from "../../assets/images/site/3.webp"
import image4 from "../../assets/images/site/4.webp"
import image5 from "../../assets/images/site/5.webp"
import image6 from "../../assets/images/site/6.webp"
import image7 from "../../assets/images/site/7.webp"
import image8 from "../../assets/images/site/8.webp"
import image9 from "../../assets/images/site/9.webp"
import image10 from "../../assets/images/site/10.webp"

const width = 400 + 16;

const sitePics = [ image1, image2, image3, image4, image5, image6, image7, image8, image9, image10 ]

export default function Site() {
    const slider = useRef()

    function prevSlide() {
        if (slider.current.scrollLeft === 0) {
            slider.current.scrollBy({
                left: (width * sitePics.length),
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
                left: -(width * sitePics.length),
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
        <section className="features">
            <div className="container relative ">
                <h2 className="h2 section-title">Actual Site</h2>
                <ul ref={slider} className="flex items-center gap-4 overflow-x-scroll overflow-y-hidden appreciations ">
                    {sitePics.map((image, i) => ( 
                        <li key={i} className='min-w-[400px]' >
                            <div className="relative rounded-md flex flex-col justify-center items-center gap-[10px] shadow-md " >
                                    <div className="">  
                                    <img loading='lazy' width={400} height={300} src={image} alt="actual site pic" />
                                    </div>
                            </div>
                        </li>
                    ))} 
                </ul>
                <div className={`flex absolute  w-full justify-between  top-1/2 translate-y-1/2 `} >
                    <div className='p-4 -ml-3 bg-white rounded-full shadow-2xl md:-ml-8 aspect-square' >
                        <PrevArrow onClick={prevSlide} />
                    </div>
                    <div className='p-4 mr-4 bg-white rounded-full shadow-2xl md:-mr-1 aspect-square' >
                        <NextArrow onClick={nextSlide} />
                    </div>
                </div>
            </div>
        </section>
    )
}




function NextArrow({ onClick }) {
    return (
        <button name='next' aria-label='next' onClick={onClick} className={`cursor-pointer`} >
            <Arrow className={` rotate-180`} />
        </button>
    )
}
function PrevArrow({ onClick }) {
    return (
        <button name='prev' aria-label='prev' onClick={onClick} className={`cursor-pointer`} >
            <Arrow />
        </button>
    )
}