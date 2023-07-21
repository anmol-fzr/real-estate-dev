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
import H2 from "../Typo/H2"
import { Zoom } from 'react-reveal'

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
        <section className="features !max-w-[100vw] overlflow-x-hidden ">
            <div className="container relative ">
                <H2>Actual Site</H2>
                <ul ref={slider} style={{ maxWidth: '100vw' }} className="flex items-center gap-4 !overflow-x-auto overflow-y-hidden appreciations ">
                    {sitePics.map((image, i) => ( 
                        <li key={i} className='min-w-[400px]' >
                            <div className="relative rounded-md flex flex-col justify-center items-center gap-[10px] shadow-md " >
                                    <div className="">  
                                    <Zoom>
                                    <img loading='lazy' width={400} height={300} src={image} alt="actual site pic" />

                                    </Zoom>

                                    </div>
                            </div>
                        </li>
                    ))} 
                </ul>
                <div className={`flex w-fit absolute !max-w-[100vw] mt-4  justify-between -translate-x-1/2 left-1/2 `} >
                    <div className='p-4 bg-white rounded-full shadow-2xl aspect-square' >
                        <PrevArrow onClick={prevSlide} />
                    </div>
                    <div className='p-4 bg-white rounded-full shadow-2xl aspect-square' >
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