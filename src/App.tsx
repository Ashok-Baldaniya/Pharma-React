import React from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Products from "./pages/Products"
import ProductDetail from "./pages/ProductDetail"
import Certificates from "./pages/Certificates"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"

const ScrollToTop = () => {
  const location = useLocation()

  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }, [location.pathname, location.search])

  return null
}

const App = () => {
  return (
    <div className="min-h-screen bg-hero text-ink">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:slug" element={<ProductDetail />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
