import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home"
import Modal from "./components/Modal"
import Wa from "./components/Wa"
import Call from "./components/Call"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import icons from "./shared/icons"
import useStore from "./store/store"

export default function Router() { 
  const openModal = useStore(state => state.openModal)
  return (
    <>
      <div className="absolute z-[9999]" >
        <div className="fixed bottom-0 flex items-center justify-center w-full gap-2 p-3 px-6 bg-white divide-x divide-primary md:hidden" >
          <a href='tel:+919990633353' className="inline-flex items-center gap-2 px-2 capitalize"  >
            {icons.call}
            call
          </a>
          <button onClick={openModal} className="inline-flex items-center gap-2 px-2 capitalize"  >
            {icons.mail} Enquiry
          </button>
          <a href="https://wa.me/+919990633353" target='_blank' className="inline-flex items-center gap-2 px-2 capitalize"  >
            {icons.whatsapp}  Whatsapp
          </a>



        </div>
        <div className="hidden md:block" >
        <Wa />
        <Call />

        </div>
      </div>
      <Header />
      <Navbar />
      <Home />
      <Footer />
      <Modal />
    </>
  )
}
