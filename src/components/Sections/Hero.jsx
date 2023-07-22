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
        <section className="relative hero pb-36 z-[4] !bg-cover !bg-center  !bg-no-repeat   " id="home">

            <p className="h1 hero-title text-center !mb-12 !text-white " >

                Be a Proud Resident Near Asia's Biggest Airport
            </p>
            <div className="container  z-[5]  !items-start"  >
                {/* <div className="container pb-36 z-[5]"  > */}
                <Slide left >

                <div className=" hero-content">
                    <h2 className="!text-white   capitalize h1 hero-title ">
                            Let your investment flies | Limited Residential Lands on sale Near Jewar International Airport | Airport Completes In End 2024 | Invest Now
                        </h2>
                </div>
                </Slide>

                <Slide right >
                    <div className="bg-white/25 " >
                        <Contact address={false} />
                    </div>
                </Slide>
            </div>
            <div className="max-w-[1200px] mx-auto" >
                <div className="w-full  hero-content flex items-center flex-col gap-4  bg-black/25 py-6 backdrop-blur-[1px] !text-white  " >

                    <div className="flex items-center  !gap-8 mx-auto -mt-4" >
                        {b.map((text) => (
                            <span>
                                <img className="inline mr-2" width={23} height={23} src={check} alt="check" />
                                {text}
                            </span>
                        ))}
                    </div>
                    <p className="text-2xl text-center !text-white " >
                        Minimum size start 100Sq. Yards
                    </p>
                    <button onClick={openModal} className="btn" >I Want more Details </button>
                </div>
            </div>

        </section>
    )
}