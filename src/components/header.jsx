import React, { useEffect, useState } from 'react'
import logo from "../assets/images/grablogo.png"
import { Link } from 'react-router-dom'
import { Cart } from './cart'
const Header = () => {
  const [location, setLocation] = useState({
    city: localStorage.getItem("city") || "",
    place: localStorage.getItem("place") || "",
  })

  useEffect(() => {
    // update from storage event (other tabs/windows)
    const onStorage = (e) => {
      if (!e) return
      if (e.key === 'city' || e.key === 'place') {
        setLocation({
          city: localStorage.getItem('city') || '',
          place: localStorage.getItem('place') || '',
        })
      }
    }

    // custom event for same-tab updates (preferred if other components dispatch it)
    const onLocationChanged = (e) => {
      const detail = e?.detail
      if (detail && (detail.city || detail.place)) {
        setLocation((prev) => ({
          city: detail.city ?? prev.city,
          place: detail.place ?? prev.place,
        }))
      } else {
        // fallback to localStorage read
        setLocation({
          city: localStorage.getItem('city') || '',
          place: localStorage.getItem('place') || '',
        })
      }
    }

    // polling fallback for same-tab changes when other components don't dispatch an event
    let pollId = null
    const startPolling = () => {
      let lastCity = localStorage.getItem('city') || ''
      let lastPlace = localStorage.getItem('place') || ''
      pollId = setInterval(() => {
        const curCity = localStorage.getItem('city') || ''
        const curPlace = localStorage.getItem('place') || ''
        if (curCity !== lastCity || curPlace !== lastPlace) {
          lastCity = curCity
          lastPlace = curPlace
          setLocation({ city: curCity, place: curPlace })
        }
      }, 700)
    }

    window.addEventListener('storage', onStorage)
    window.addEventListener('locationChanged', onLocationChanged)
    startPolling()

    return () => {
      window.removeEventListener('storage', onStorage)
      window.removeEventListener('locationChanged', onLocationChanged)
      if (pollId) clearInterval(pollId)
    }
  }, [])

  const city = location.city
  const place = location.place

  return (
      <header className="flex bg-gray-800 border-b border-gray-300 py-3 sm:px-6 px-4  tracking-wide relative z-50">
      <div className="flex max-w-screen-xl mx-auto w-full">
        <div className="flex flex-wrap items-center lg:gap-y-2 gap-4 w-full">
        

    
<Link to={'/'}><img src={logo} alt="Logo" width={80} height={80}/></Link>
<span className='flex items-center gap-2'>
  <h1 className='text-xl font-medium text-white'>Location:</h1>
  <h2 className='text-xl font-medium text-white'>{place}{place && city ? ',' : ''}{city}</h2>
</span>
          <div className="flex items-center ml-auto">
          

            <div className="flex items-center sm:space-x-8 space-x-6">
            <Cart/>
            </div>
          </div>
        </div>
      </div>
    </header>

    )
}

export default Header