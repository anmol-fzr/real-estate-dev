import Slide from "react-reveal/Slide"

export default function H2({ children }) {
    return (
        <Slide bottom >
            <h2 className="h2 section-title">{children}</h2>
        </Slide>
    )
}
