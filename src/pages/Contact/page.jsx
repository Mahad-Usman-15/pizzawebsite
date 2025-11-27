import React from 'react'
import { useState } from 'react'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'
export default function Contact() {
    const [loading, setLoading] = useState(false);
  const [form, setisform] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  })
  const handlechange = (e) => {
    const { name, value } = e.target
     setisform((prev) => ({ ...prev, [name]: value }));

  }
  const handlesubmit = async (e) => {

    e.preventDefault()
     if (!form.name || !form.email || !form.phone || !form.message) {
      Swal.fire({
        icon: "warning",
        text: "Please fill out all fields before submitting.",
      });
      return;
    }
    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      })
const data = await response.json()
      if (response.ok) {
        setisform(data)
        Swal.fire({
          icon: "success",
          text: "Message sent successfully",
          showCloseButton: true,
        });
   setisform({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      }else{
 Swal.fire({
          icon: "error",
          title: "Error",
          text:  "Failed to send message.",
          showCloseButton: true,
        });
      }
    } catch (error) {
      console.log(error)
      setisform({})
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        showCloseButton: true,
      });

    }finally {
      setLoading(false);
    }


  }
  return (
    <div className="isolate  px-6 py-24 sm:py-32 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-1/2 -z-10 aspect-1155/678 w-144.5 max-w-none -translate-x-1/2 rotate-30 bg-linear-to-tr from-red-100 to-orange-200 opacity-30 sm:left-[calc(50%-40rem)] sm:w-288.75"
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">Contact US</h2>
        <p className="mt-2 text-lg/8 text-gray-600">Aute magna irure deserunt veniam aliqua magna enim voluptate.</p>
      </div>
      <form onSubmit={handlesubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1  gap-y-6">
          <div>
            <label htmlFor="first-name" className="block text-sm/6 font-semibold text-white">
              First name
            </label>
            <div className="mt-2.5">
              <input
                onChange={handlechange}

                name="name"
                type="text"
                value={form.name}
             
                className="block w-full rounded-md  px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm/6 font-semibold text-white">
              Email
            </label>
            <div className="mt-2.5">
              <input
          
                name="email"
                type="email"
                onChange={handlechange}
                value={form.email}
             
                className="block w-full rounded-md  px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-white">
              Phone number
            </label>
            <div className="mt-2.5">
              <div className="flex rounded-md  outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                <input
                  name="phone"
                  type="text"
                  onChange={handlechange}
                  value={form.phone}
                  placeholder="123-456-7890"
                  className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                />
              </div>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm/6 font-semibold text-white">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
         
                name="message"
                onChange={handlechange}
                value={form.message}
                rows={4}
                className="block w-full rounded-md  px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                defaultValue={''}
              />
            </div>
          </div>
          <div className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <div className="group relative inline-flex w-8 shrink-0 rounded-full bg-gray-200 p-px inset-ring inset-ring-gray-900/5 outline-offset-2 outline-indigo-600 transition-colors duration-200 ease-in-out has-checked:bg-indigo-600 has-focus-visible:outline-2">
                <span className="size-4 rounded-full  shadow-xs ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out group-has-checked:translate-x-3.5" />
                <input
                  id="agree-to-policies"
                  name="agree-to-policies"
                  type="checkbox"
                  aria-label="Agree to policies"
                  className="absolute inset-0 appearance-none focus:outline-hidden"
                />
              </div>
            </div>
            <label htmlFor="agree-to-policies" className="text-sm/6 text-gray-600">
              By selecting this, you agree to our{' '}
              <Link to={"/privacy"} className="font-semibold whitespace-nowrap text-indigo-600">
                privacy policy
              </Link>
              .
            </label>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  )
}



