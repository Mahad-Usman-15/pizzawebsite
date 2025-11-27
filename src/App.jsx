import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/footer'
import Home from './pages/home/page'
import FAQS from './pages/faqs/page'
import Header from './components/header'
import Contact from './pages/Contact/page'
import ScrollToTop from './components/arrow'
import Privacy from './pages/help/privacypolicy/page'
import Terms from './pages/help/terms/page'
import Checkout from './pages/checkout/page'
import Loader from './components/loader'
import Login from './pages/admin/page'
import Panel from './pages/admin/panel/page'
import Location from './components/locationmodal'
import Protectedroute from './components/Protectedroute'
import Success from './pages/order/success'
function App() {
  const [isloading, setisloading] = useState(true)


  useEffect(() => {
    const timeout = setTimeout(() => {
      setisloading(false)
    }, 1000)
    return () => clearTimeout(timeout)
  }, [])
  return (
    <>
      <Location />
      {
        isloading ? (<Loader />) : (<>  <BrowserRouter>
          <Header />
          <Routes>
            <Route element={<Home />} path='/'></Route>
            <Route element={<Contact />} path='/contact'></Route>
            <Route element={<FAQS />} path='/faqs'></Route>
            <Route element={<Privacy />} path='/privacy'></Route>
            <Route element={<Terms />} path='/terms'></Route>
            <Route element={<Checkout />} path='/checkout'></Route>
            <Route element={<Login />} path='/admin'></Route>
            <Route element={<Success />} path='/order/success/:orderId'></Route>
            <Route
              path="/admin/panel"
              element={
                <Protectedroute>
                  <Panel />
                </Protectedroute>
              }
            />
          </Routes>
          <ScrollToTop />
          <Footer />
        </BrowserRouter>
        </>
        )
      }

    </>

  )
}

export default App
