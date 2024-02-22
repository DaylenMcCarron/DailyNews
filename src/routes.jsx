import { Route, Routes, BrowserRouter } from "react-router-dom"

import Home from "./components/home"
import Header from "./components/header"
import Contact from "./components/contact"

const Router = () => {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router