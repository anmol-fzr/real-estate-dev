
import { useState } from "react"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home"
import Modal from "./components/Modal"



export default function Router() {
  const [ modal, setModal ] = useState(false)

  function openModal() {
    setModal(true)
  }

  return (
    <>
      <Navbar {...{ modal, openModal }} />
      <Home />
      <Modal open={modal} />
    </>
  )
}
