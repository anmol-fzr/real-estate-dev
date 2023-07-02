import React from 'react'

import image1 from "../../assets/images/site/1.jpeg"
import image2 from "../../assets/images/site/2.jpeg"
import image3 from "../../assets/images/site/3.jpeg"
import image4 from "../../assets/images/site/4.jpeg"
import image5 from "../../assets/images/site/5.jpeg"
import image6 from "../../assets/images/site/6.jpeg"
import image7 from "../../assets/images/site/7.jpeg"
import image8 from "../../assets/images/site/8.jpeg"
import image9 from "../../assets/images/site/9.jpeg"
import image10 from "../../assets/images/site/10.jpeg"


// const sitePics = [ image1, image2, image4, image5, image6, image7, image8, image9 ]
const sitePics = [ image1, image2, image3, image4, image5, image6, image7, image8, image9, image10 ]


export default function Site() {
    return (
        <section className="features">
            <div className="container">
                <h2 className="h2 section-title">Actual Site</h2>
                <ul className="features-list">
                    {sitePics.map((image, i) => (
                        <li key={i}>
                            <div className="relative rounded-md flex flex-col justify-center items-center gap-[10px] shadow-md " >
                                <div className="">
                                    {/* {icon} */}
                                    <img className='object-cover rounded-xl ' src={image} alt="" />
                                </div>
                                {/* <h3 className="capitalize card-title">{text}</h3> */}
                            </div>
                        </li>
                    ))}

                </ul>
            </div>
        </section>
    )
}
