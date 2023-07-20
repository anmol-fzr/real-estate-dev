// import useStore from "../../store/store"
import Contact from "./Contact"

export default function Hero() {
    // const openModal = useStore(state => state.openModal)
    return (
        // <section className="relative hero bg-cover  z-[4]  !bg-no-repeat !bg-[url(https://i.imgur.com/FysKIN2l.jpg)] md:!bg-[url(https://i.imgur.com/FysKIN2h.jpg)] " id="home">
        <section className="relative hero z-[4] !bg-cover bg-black/90 !bg-no-repeat  !bg-hero-lg " id="home">

            <div className="container pb-36 z-[5]  !items-start"  >
                {/* <div className="container pb-36 z-[5]"  > */}
                <div className=" hero-content">
                    <h2 className="!text-white   capitalize h1 hero-title ">
                        Let your investment flies | Limited Residential Lands on sale Near Jewar International Airport
                        {/* | Airport nearly to its completion | Invest Now | buy Residential plots now | In hand Registry and Possession | Min 100Sq Yards or 100 Gaj | Once in a life time offer | Book Call Now */}
                    </h2>
                    {/* <h2 className=" capitalize text-3xl ml-2 mb-4 !text-white ">9990633353</h2> */}
                    {/* <button onClick={openModal} className="btn">Make An Enquiry</button> */}
                </div>

                <Contact address={false} />

            </div>

        </section>
    )
}