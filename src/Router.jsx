
import { useState } from "react"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home"
import Modal from "./components/Modal"
import Wa from "./components/Wa"
import Call from "./components/Call"



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
      <Navbar {...{ modal, openModal }} />
      <Home {...{ openModal }} />
      <Wa />
      <Call />
      <Modal open={modal} close={closeModal} />
    </>
  )
}
