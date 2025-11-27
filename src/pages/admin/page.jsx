import React from 'react'
import logo from "../../assets/images/grablogo.png"

import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Swal from 'sweetalert2'


const Login = () => {
  const router = useNavigate()
  const [formvalues, setisformsvalues] = useState({
    username: "",
    password: ""
  })

  const handleinputchange = (e) => {
    const value = e.target.value
    const name = e.target.name
    setisformsvalues({ ...formvalues, [name]: value })
  }
  const handlelogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formvalues),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("adminToken", data.token);
        router("/admin/panel");
        Swal.fire({
          title: "Success",
          text: "Admin logged in!",
          icon: "success",
        });
      }
      if (!response.ok) {

        Swal.fire({ title: "Error", text: data.message, icon: "error" });
        return;
      }




    } catch (error) {
      console.log(error);
      Swal.fire({ title: "Error", text: "Something went wrong", icon: "error" });
    }
  };



  return (
    <div className="">
      <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
        <div className="max-w-[480px] w-full">
          <a href="javascript:void(0)">
            <img
              src={logo}
              alt="logo"
              className="w-40 mb-8 mx-auto block"
            />
          </a>
          <div className="p-6 sm:p-8 rounded-2xl  border border-gray-200 shadow-sm">
            <h1 className="text-white text-center text-3xl font-semibold">
              Admin Login
            </h1>
            <form className="mt-12 space-y-6" onSubmit={handlelogin}>
              <div>
                <label className="text-white text-sm font-medium mb-2 block">
                  User name
                </label>
                <div className="relative flex items-center" >
                  <input
                    name="username"
                    required
                    onChange={handleinputchange}
                    value={formvalues.username}
                    className="w-full text-white placeholder:text-white text-sm border border-slate-300 px-4 py-3 pr-8 rounded-md outline-blue-600"
                    placeholder="Enter username"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    className="w-4 h-4 absolute right-4"
                    viewBox="0 0 24 24"
                  >
                    <circle cx={10} cy={7} r={6} data-original="#000000" />
                    <path
                      d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                      data-original="#000000"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <label className="text-white text-sm font-medium mb-2 block">
                  Password
                </label>
                <div className="relative flex items-center">
                  <input
                    name="password"
                    type="password"
                    required
                    onChange={handleinputchange}
                    value={formvalues.password}
                    className="w-full text-white text-sm placeholder:text-white border border-slate-300 px-4 py-3 pr-8 rounded-md outline-blue-600"
                    placeholder="Enter password"
                  />

                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4">

              </div>
              <div className="!mt-12">
                <button
                  type="submit"
                  className="w-full py-2 px-4 text-[15px] font-medium tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none cursor-pointer"
                >
                  Login as Admin
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Login 