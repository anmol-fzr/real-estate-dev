import image3 from "../../assets/images/site/3.webp"
import image5 from "../../assets/images/site/5.webp"
import image1 from "../../assets/images/site/1.webp"
import useStore from "../../store/store"
import H2 from "../Typo/H2"
import Zoom from "react-reveal/Zoom"

const amenties = [
    {
        src: image3,
        area: '100 Square Yards',
        location: 'TAPPAL, NH-334D, UP - 202165',
        price: '₹20 LAKHS',
    }, 
    {
        src: image5,
        area: '200 Square Yards',
        location: 'TAPPAL, NH-334D, UP - 202165',
        price: '₹40 LAKHS',
    }, 
    {
        src: image1,
        area: '400 Square Yards',
        location: 'TAPPAL, NH-334D, UP - 202165',
        price: '₹60 LAKHS',
    }, 
]

export default function Property() {
    const openModal = useStore(state=>state.openModal)
    return (
        <section className="features">
            <div className="container">
                <H2>Investment Oppurtunities</H2>
                <ul className="features-list">
                    {amenties.map(({ src,area,location,price }) => (
                        <div key={price} className="flex flex-col items-start justify-between !w-[350px]  bg-white shadow-md  group hover:shadow-lg rounded-xl">
                            <div className="relative">
                                <Zoom>

                                <img loading='lazy' width={350} height={262.5} className="rounded-t-xl" {...{src}} alt="actual site pic" />
                                </Zoom>
                            </div>
                            <div className="w-full px-6 pb-6">
                                <div className="flex flex-col w-full gap-2 py-4">
                                    <p className="text-lg font-medium" >{area}</p>
                                    <p className="font-light ">{location}</p>
                                    <p className="capitalize">{price}</p>
                                </div>
                                <button onClick={openModal} className="w-full text-center btn"> 
                                        Book Now
                                </button>
                            </div>
                        </div>
                    ))}
                </ul>
            </div>
        </section>
    )
}



// import React from 'react'

// import image3 from "../../assets/images/site/3.webp"
// // 3

// export default function Property() {
//     return (
//         <section className="features">
//             <div className="container relative ">
//                 <h2 className="h2 section-title">Actual Site</h2>
//             </div>

            


//         </section>
//     )
// }

