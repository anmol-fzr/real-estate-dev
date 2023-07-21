import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home"
import Modal from "./components/Modal"
import Wa from "./components/Wa"
import Call from "./components/Call"
// import Header from "./components/Header/Header"
import Slide from "react-reveal/Slide"
import Fade from "react-reveal/Fade"
import Footer from "./components/Footer/Footer"
import icons from "./shared/icons"
import useStore from "./store/store"
import NewModal from "./components/NewModal"

export default function Router() {
  const openModal = useStore(state => state.openModal)
  return (
    <>
      <div className="absolute z-[9999] !w-screen !overflow-hidden " >
        <div className="fixed bottom-0 flex flex-col sm:flex-row items-center justify-center w-full gap-2 p-3  bg-secondary   !text-primary " >
          <a href='tel:+919990633353' className="flex items-center gap-2 px-4 capitalize "  >
            {icons.call}
            call
          </a>
          <button onClick={openModal} className="flex items-center gap-2 px-4 capitalize "  >
            {icons.mail} Enquiry
          </button>
          <a href="https://wa.me/+919990633353" target='_blank' className="flex items-center gap-2 px-4 capitalize"  >
            {icons.whatsapp}  Whatsapp
          </a>



        </div>
        <div className="" >
          <Wa />
          <Call />

        </div>
      </div>
      {/* <Header /> */}

      <Slide top >
        <Navbar />
      </Slide>
      <Home />
      <Slide bottom >
        <Footer />
      </Slide>
      <NewModal />
    </>
  )
}

