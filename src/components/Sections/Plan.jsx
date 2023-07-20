import layout from "../../assets/images/layout/layout.webp"

export default function Plan() {
    return (
        <div className="container">
            <div className='mb-20 mt-28 ' >
                <h2 className="h2 section-title">Plan</h2>
                <div >
                    <img loading='lazy' src={layout} width={1280} height={989} alt="layout" />
                </div>
            </div>
        </div>
    )
}
