import aboutImage from "../../assets/about-banner-1.jpeg"

export default function About() {
    return (
        <section className="container about" id="about">
            <div className="grid justify-between grid-cols-1 gap-12 sm:grid-cols-2 ">
                <figure className="about-banner">
                    <img loading='lazy' src={aboutImage} className='rounded ' alt="House interior" />
                </figure>
                <div className="">
                    <h2 className="h2 section-title ">
                        Vimaan vihar
                    </h2>
                    <p className="text-[#5d737e] text-xl mb-8 ">
                        Welcome to the ideal residential plot near the jewar international airport! Nestled in a prime location, this plot offers a unique opportunity for those seeking convenience, connectivity, and a tranquil living environment. With its close proximity to the airport, you'll experience the benefits of easy travel access while enjoying the comfort of a residential oasis.
                    </p>
                </div>
            </div>
        </section>
    )
}
