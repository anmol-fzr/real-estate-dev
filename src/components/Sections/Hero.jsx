export default function Hero({ openModal }) {
    return (
        <section className="relative hero !bg-cover  z-[4]  !bg-no-repeat !bg-[url(https://i.imgur.com/FysKIN2.jpg)] " id="home">
            <div className="container pb-36 z-[5]"  >
                <div className=" hero-content">
                    <h2 className="!text-white   capitalize h1 hero-title ">residential plots available near Jewar international Airport</h2>
                    <h2 className=" capitalize text-3xl ml-2 mb-4 !text-white ">9990633353</h2>
                    <button onClick={openModal} className="btn">Make An Enquiry</button>
                </div>
            </div>
        </section>
    )
}
