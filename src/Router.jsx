<<<<<<< HEAD

import { useState } from "react"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home"
import Modal from "./components/Modal"
=======
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home"
>>>>>>> 0149959f9030f31351005e71c87dfef85fe3107c



export default function Router() {
<<<<<<< HEAD
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
=======

  return (
    <Routes>
      <Route element={<Navbar />} >
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
>>>>>>> 0149959f9030f31351005e71c87dfef85fe3107c
  )
}
