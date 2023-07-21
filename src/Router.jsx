import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home"
import Modal from "./components/Modal"
import Wa from "./components/Wa"
import Call from "./components/Call"
// import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import icons from "./shared/icons"
import useStore from "./store/store"

export default function Router() { 
  const openModal = useStore(state => state.openModal)
  return (
    <>
      <div className="absolute z-[9999] !w-screen !overflow-hidden " >
        <div className="fixed bottom-0 flex items-center justify-center w-full gap-2 p-3  bg-secondary   !text-primary " >
          <a href='tel:+919990633353' className="flex items-center gap-2 px-4 capitalize border-r-2 border-primary"  >
            {icons.call}
            call
          </a>
          <button onClick={openModal} className="flex items-center gap-2 px-4 capitalize "  >
            {icons.mail} Enquiry
          </button>
          <a href="https://wa.me/+919990633353" target='_blank' className="flex items-center gap-2 px-4 capitalize border-l-2 border-primary"  >
            {icons.whatsapp}  Whatsapp
          </a>



        </div>
        <div className="" >
        <Wa />
        <Call />

        </div>
      </div>
      {/* <Header /> */}
      <Navbar />
      <Home />
      <Footer />
      <Modal />
    </>
  )
}
