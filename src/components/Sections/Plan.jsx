import layout from "../../assets/images/layout/layout.webp"
import H2 from "../Typo/H2"
import Zoom from "react-reveal/Zoom"


export default function Plan() {
    return (
        <div className="container">
            <div className='mb-20 mt-28 !text-white' >
                <H2>Plan</H2>
                <div >
                    <Zoom>

                    <img loading='lazy' src={layout} width={1280} height={989} alt="layout" />
                    </Zoom>
                </div>
            </div>
        </div>
    )
}
