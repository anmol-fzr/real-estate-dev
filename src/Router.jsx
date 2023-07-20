import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home"
import Modal from "./components/Modal"
import Wa from "./components/Wa"
import Call from "./components/Call"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"

export default function Router() { 
  return (
    <>
      <div className="absolute z-[9999]" >
        <Wa />
        <Call />
      </div>
      <Header />
      <Navbar />
      <Home />
      <Footer />
      <Modal />
    </>
  )
}
