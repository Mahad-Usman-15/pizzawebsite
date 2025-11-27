import React, { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const Location = () => {
  const [isshow, setisshow] = useState(false)
  const [selectedCity, setSelectedCity] = useState("")
  const [selectedPlace, setSelectedPlace] = useState("")


  useEffect(() => {
    const savedCity = localStorage.getItem("city")
    const savedPlace = localStorage.getItem("place")

    if (!savedCity || !savedPlace) {
      setTimeout(() => setisshow(true), 500)
    }
  }, [])


  useEffect(() => {
    if (selectedCity) localStorage.setItem("city", selectedCity)
    if (selectedPlace) localStorage.setItem("place", selectedPlace)

    if (selectedCity && selectedPlace) {
      setisshow(false)
    }
  }, [selectedCity, selectedPlace])

  return (
    <>
      {isshow && (
        <div className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-1000 before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto">
          <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8 relative">

            {(selectedCity && selectedPlace) && (
              <button
                onClick={() => setisshow(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition"
              >
                <X size={24} />
              </button>
            )}

            <div className="my-8 text-center">
              <h4 className="text-3xl text-slate-900 font-bold">Choose Location</h4>
              <p className="text-sm text-slate-500 mt-4">
                Choose the location to proceed
              </p>
            </div>

            <form className="space-y-4 grid place-items-center">
              <button
                type="button"
                className="bg-linear-to-br from-gray-100 to-gray-300 px-6 py-2.5 cursor-pointer rounded-lg text-gray-800 text-sm tracking-wider font-semibold border border-gray-400 shadow-md hover:shadow-inner active:scale-[0.98] transition"
              >
                Choose Current Location
              </button>

              <Select onValueChange={setSelectedCity}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a City" />
                </SelectTrigger>
                <SelectContent className="z-[1000]">
                  <SelectGroup>
                    <SelectLabel>Cities in Pakistan</SelectLabel>
                    <SelectItem value="karachi">Karachi</SelectItem>
                    <SelectItem value="lahore">Lahore</SelectItem>
                    <SelectItem value="islamabad">Islamabad</SelectItem>
                    <SelectItem value="rawalpindi">Rawalpindi</SelectItem>
                    <SelectItem value="faisalabad">Faisalabad</SelectItem>
                    <SelectItem value="peshawar">Peshawar</SelectItem>
                    <SelectItem value="multan">Multan</SelectItem>
                    <SelectItem value="quetta">Quetta</SelectItem>
                    <SelectItem value="sialkot">Sialkot</SelectItem>
                    <SelectItem value="hyderabad">Hyderabad</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Select onValueChange={setSelectedPlace}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a Place" />
                </SelectTrigger>
                <SelectContent className="z-[1000]">
                  <SelectGroup>
                    <SelectLabel>Popular Places</SelectLabel>
                    <SelectItem value="clifton">Clifton, Karachi</SelectItem>
                    <SelectItem value="defence">Defence (DHA)</SelectItem>
                    <SelectItem value="gulberg">Gulberg, Lahore</SelectItem>
                    <SelectItem value="blue-area">Blue Area, Islamabad</SelectItem>
                    <SelectItem value="cantt">Cantt Area</SelectItem>
                    <SelectItem value="saddar">Saddar</SelectItem>
                    <SelectItem value="f10">F-10, Islamabad</SelectItem>
                    <SelectItem value="university-road">University Road, Peshawar</SelectItem>
                    <SelectItem value="model-town">Model Town, Lahore</SelectItem>
                    <SelectItem value="mall-road">Mall Road</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default Location
