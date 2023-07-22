import aboutImage from "../../assets/about-banner-1.jpeg"
import Slide from "react-reveal/Slide"
import H2 from "../Typo/H2"

export default function About() {
    return (
        <section className="container about" id="about">
            <div className="grid justify-between grid-cols-1 gap-12 md:grid-cols-2 ">
                <Slide left >
                <figure className="about-banner">
                    <img loading='lazy' width={474} height={474} src={aboutImage} className='rounded ' alt="House interior" />
                </figure>
                </Slide>
                <Slide right >

                    <div className="!text-white">
                        <H2 >
                        Vimaan vihar
                        </H2>
                        <p className="mb-8 text-xl text-gray-200 ">
                            {/* <p className="text-[#5d737e] text-xl mb-8 "> */}
                        Welcome to the ideal residential plot near the jewar international airport! Nestled in a prime location, this plot offers a unique opportunity for those seeking convenience, connectivity, and a tranquil living environment. With its close proximity to the airport, you'll experience the benefits of easy travel access while enjoying the comfort of a residential oasis.
                    </p>
                </div>
                </Slide>
            </div>
        </section>
    )
}
