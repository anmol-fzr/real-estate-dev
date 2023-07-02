import metro from "../../assets/images/features/metro.jpg"
import airport from "../../assets/images/features/airport.jpg"
import movies from "../../assets/images/features/movies.jpg"
import study from "../../assets/images/features/study.jpg"
import hospital from "../../assets/images/features/hospital.jpg"
import club from "../../assets/images/features/club.jpg"
import cricket from "../../assets/images/features/circket.jpg"
import university from "../../assets/images/features/university.webp"
import f1 from "../../assets/images/features/f1.jpg"

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
                                    <img loading="lazy" alt="Placeholder" className="block !w-[375px] h-[266px] object-cover" src={image} />
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
