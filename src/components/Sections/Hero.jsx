// import useStore from "../../store/store"
import Slide from "react-reveal/Slide"
import Contact from "./Contact"
import check from "../../assets/svg/check.png"
import useStore from "../../store/store"
useStore

const b = [
    'Same day Registry',
    'Same day Mutation',
    'CLU in hand',
]

export default function Hero() {
    const openModal = useStore(state => state.openModal)
    return (
        // <section className="relative hero bg-cover  z-[4]  !bg-no-repeat !bg-[url(https://i.imgur.com/FysKIN2l.jpg)] md:!bg-[url(https://i.imgur.com/FysKIN2h.jpg)] " id="home">
        <section className="relative hero pb-36 z-[4] !bg-cover !bg-center bg-black/90 !bg-no-repeat  !bg-hero-lg " id="home">

            <div className="container  z-[5]  !items-start"  >
                {/* <div className="container pb-36 z-[5]"  > */}
                <Slide left >

                <div className=" hero-content">
                    <h2 className="!text-white   capitalize h1 hero-title ">
                            Let your investment flies | Limited Residential Lands on sale Near Jewar International Airport | Airport Completes In End 2024 | Invest Now
                        {/* | Airport nearly to its completion | Invest Now | buy Residential plots now | In hand Registry and Possession | Min 100Sq Yards or 100 Gaj | Once in a life time offer | Book Call Now */}
                    </h2>
                    {/* <h2 className=" capitalize text-3xl ml-2 mb-4 !text-white ">9990633353</h2> */}
                    {/* <button onClick={openModal} className="btn">Make An Enquiry</button> */}
                </div>
                </Slide>

                <Slide right >
                <Contact address={false} />
                </Slide>
            </div>
            <div className="max-w-[1200px] mx-auto" >
                <div className="w-full  hero-content flex items-center flex-col gap-4  bg-white/25 py-6 backdrop-blur-[1px] !text-white  " >
                    <p className="h1 hero-title text-center !text-white " >
                        Minimum size start 100Sq. Yards
                    </p>
                    <div className="flex items-center  !gap-8 mx-auto -mt-4" >
                        {b.map((text) => (
                            <span>
                                <img className="inline mr-2" width={23} height={23} src={check} alt="check" />
                                {text}
                            </span>
                        ))}
                    </div>
                    <p className="text-2xl text-center !text-white " >
                        Be a Proud Resident Near Asia's Biggest Airport
                    </p>
                    <button onClick={openModal} className="btn" >I Want more Details </button>
                </div>
            </div>

        </section>
    )
}