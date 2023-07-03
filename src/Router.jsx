
import { useState } from "react"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home"
import Modal from "./components/Modal"
import Wa from "./components/Wa"
import Call from "./components/Call"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"

export default function Router() {
  const [ modal, setModal ] = useState(false)

  function openModal() {
    setModal(true)
  }

  function closeModal() {
    setModal(false)
  }


  return (
    <>
      <Header />
      <Navbar {...{ modal, openModal }} />
      <Home {...{ openModal }} />
      {/*<Footer  {...{ openModal }} />

      <Wa />
      <Call />
      <Modal open={modal} close={closeModal} /> */}
    </>
  )
}
