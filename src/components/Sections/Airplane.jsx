
import Slide from "react-reveal/Slide"
import H2 from "../Typo/H2"

export default function Airplane() {
    return (
        <section className="container about " id="about">
            <div className="grid justify-between grid-cols-1 gap-12 lg:grid-cols-2 ">
                <Slide right >
                    <figure className="lg:order-2 about-banner">
                        {/* h-[315px] */}
                        <iframe
                            className="w-[90vw] max-w-[560px] aspect-video"
                            src="https://www.youtube.com/embed/u8pwnMlbKvk?rel=0"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen=""
                        />
                    </figure>
                </Slide>
                <Slide left >

                    <div className="">
                        <H2 >
                            Why Near Jewar Airport?
                        </H2>
                        <p className="text-[#5d737e] text-xl mb-8 ">
                            Jewar International Airport will generate around 250,000 job opportunities within a few years of starting its operations. It will be the biggest airport in Asia and the fourth largest in the world. The airport covers an area of 5100 hectares (equivalent to 12355 acres) and currently has 6 runways. Being close to the airport means there will be a high demand for both commercial and residential properties, which could result in property values increasing over time and providing rental income possibilities.
                        </p>
                    </div>
                </Slide>
            </div>
        </section>
    )
}
