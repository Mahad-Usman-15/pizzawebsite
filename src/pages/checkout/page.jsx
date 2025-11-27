import { useSelector, useDispatch } from "react-redux"
import { useState } from "react"
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom'
import { clearCart } from "../../redux/cartSlice";
export default function Checkout() {
  const router = useNavigate()
  const dispatch = useDispatch()
  const cartitems = useSelector((state) => state.cart)
  const total = Array.isArray(cartitems) ? cartitems.reduce((sum, item) => sum + (item?.product?.price || 0) * (item?.quantity || 0), 0) : 0;
  // The address selected by the user on the modal on the frontpage
  const city = localStorage.getItem("city")
  const street = localStorage.getItem("place")
  // the address should be the shipping address fetched from localStorage but user can change it at checkout time
  const initialFormValues = {
    user: {
      firstname: "",
      lastname: "",
      phone: "",
      message: ""
    },
    status: "pending",
    shippingAddress: {
      street: street || "",
      city: city || "",
    },
    totalAmount: total,
    paymentMethod: "cash_on_delivery",
  }

  const [formValues, setFormValues] = useState(initialFormValues)

  // input change handler (updates nested fields)
  const handlechange = (event) => {
    const { name, value } = event.target
    if (["firstname", "lastname", "phone", "message"].includes(name)) {
      setFormValues((prev) => ({ ...prev, user: { ...prev.user, [name]: value } }))
      return
    }
    if (["street", "city"].includes(name)) {
      setFormValues((prev) => ({ ...prev, shippingAddress: { ...prev.shippingAddress, [name]: value } }))
      return
    }
    setFormValues((prev) => ({ ...prev, [name]: value }))
  }
  const handlesubmit = async (e) => {
    e.preventDefault()
    try {
      const items = Array.isArray(cartitems)
        ? cartitems.map((ci) => ({
          productId: ci?._id ? String(ci._id) : null,
          price: ci?.product?.price || 0,
          quantity: ci?.quantity || 1,
        }))
        : [];

      const computedTotal = items.reduce((s, it) => s + (it.price || 0) * (it.quantity || 0), 0)
      console.log()
      const payload = {
        user: {
          firstname: formValues.user.firstname,
          lastname: formValues.user.lastname,
          phone: String(formValues.user.phone || ""),
          message: formValues.user.message || "",
        },
        items,
        totalAmount: computedTotal,
        status: formValues.status || 'pending',
        shippingAddress: {
          street: formValues.shippingAddress.street,
          city: formValues.shippingAddress.city || 'Karachi',
        },
        paymentMethod: formValues.paymentMethod || 'cash_on_delivery',
      }

      const response = await fetch('http://localhost:5000/api/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })
      const data = await response.json()
      if (response.ok) {
        Swal.fire({
          title: 'Success!',
          text: 'Your order has been placed successfully.',
          icon: 'success',
          confirmButtonText: 'OK'
        })
        dispatch(clearCart())
        // reset form (keep shipping defaults from localStorage)
        setFormValues(initialFormValues)

        setTimeout(() => {
        router(`/order/success/${data.order.orderId}`)
      }, 2000)
      
      }
      else {
        Swal.fire({
          title: 'Error!',
          text: data.message || 'Failed to place the order.',
          icon: 'error',
          confirmButtonText: 'OK'
        })
      }
    }
    catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'Something went wrong while placing the order.',
        icon: 'error',
        confirmButtonText: 'OK'
      })
      console.log("Error=>", error)
    }

  }
  return (
    <div className="">
      <div className="flex max-md:flex-col gap-12 max-lg:gap-4 h-full">
        <div className=" md:h-screen md:sticky md:top-0 md:min-w-[370px]">
          <div className="relative h-full">
            <div className="px-6 py-8 md:overflow-auto md:h-screen">
              <div className="space-y-4">

                {
                  cartitems.map((item, index) => (<div key={index} className="flex items-start gap-4">
                    <div className="w-24 h-24 flex p-3 shrink-0 bg-transparent rounded-md">
                      <img
                        src={item.product.image}
                        className="w-full object-contain"
                        alt={item.product.name}
                      />
                    </div>



                    <div className="w-full">
                      <h3 className="text-sm text-white font-semibold">
                        {item.product.name}
                      </h3>
                      <ul className="text-xs text-white space-y-2 mt-3">
                        <li className="flex flex-wrap gap-4">
                          Quantity <span className="ml-auto">{item.quantity ?? 1}</span>
                        </li>
                        <li className="flex flex-wrap gap-4">
                          Total Price{" "}
                          <span className="ml-auto font-semibold">{(item.product.price || 0) * (item.quantity || 1)}</span>
                        </li>
                      </ul>
                    </div>




                  </div>))
                }
              </div>
              <div>
                <ul className="text-slate-500 font-medium space-y-4">
                  <hr className="border-slate-300" />
                  <li className="flex flex-wrap gap-4 text-[15px] font-semibold text-white">
                    Total <span className="ml-auto">{total}</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <button
                    type="button"
                    onClick={handlesubmit}
                    className="rounded-md px-4 py-2.5 w-full text-sm font-medium tracking-wide bg-green-600 hover:bg-green-700 text-white cursor-pointer"
                  >
                    Complete Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl w-full h-max rounded-md px-4 py-8 max-md:-order-1">
          <form>
            <div>
              <h2 className="text-xl text-white font-semibold mb-6">
                Delivery Details
              </h2>
              <div className="grid lg:grid-cols-2 gap-y-6 gap-x-4">
                <div>
                  <label className="text-sm text-white font-medium block mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter First Name"
                    required
                    name="firstname"
                    value={formValues.user.firstname}
                    onChange={handlechange}
                    className="px-4 py-2.5 bg-transparent border border-gray-400 text-white w-full text-sm rounded-md focus:outline-blue-600"
                  />
                </div>
                <div>
                  <label className="text-sm text-white font-medium block mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Last Name"
                    name="lastname"
                    value={formValues.user.lastname}
                    onChange={handlechange}
                    className="px-4 py-2.5 bg-transparent border border-gray-400 text-white w-full text-sm rounded-md focus:outline-blue-600"
                  />
                </div>

                <div>
                  <label className="text-sm text-white font-medium block mb-2">
                    Phone No.
                  </label>
                  <input
                    type="number"
                    placeholder="Enter Phone No."
                    required
                    name="phone"

                    value={formValues.user.phone}
                    onChange={handlechange}
                    className="px-4 py-2.5 bg-transparent border border-gray-400 text-white w-full text-sm rounded-md focus:outline-blue-600"
                  />
                </div>
                <div>
                  <label className="text-sm text-white font-medium block mb-2">
                    Address Line
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Address Line"
                    required
                    name="street"
                    value={formValues.shippingAddress.street}
                    onChange={handlechange}
                    className="px-4 py-2.5 bg-transparent border border-gray-400 text-white w-full text-sm rounded-md focus:outline-blue-600"
                  />
                </div>

                <div>
                  <label className="text-sm text-white font-medium block mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    placeholder="Enter City"
                    required
                    name="city"
                    value={formValues.shippingAddress.city}
                    onChange={handlechange}
                    className="px-4 py-2.5 bg-transparent border border-gray-400 text-white w-full text-sm rounded-md focus:outline-blue-600"
                  />
                </div>
                <div>
                  <label className="text-sm text-white font-medium block mb-2">
                    Message
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Message"
                    required
                    name="message"
                    value={formValues.user.message}
                    onChange={handlechange}
                    className="px-4 py-2.5 bg-transparent border border-gray-400 text-white w-full text-sm rounded-md focus:outline-blue-600"
                  />
                </div>
              </div>
            </div>
            <div className="mt-12 max-w-md">
              <p className="text-white text-sm font-medium mb-2">
                Do you have a promo code?
              </p>
              <div className="flex gap-4">
                <input
                  type="email"
                  disabled
                  placeholder="Promo code"
                  className="px-4 py-2.5 bg-transparent border border-gray-400 text-white w-full text-sm rounded-md focus:outline-blue-600"
                />
                <button
                  type="button"
                  className="flex items-center justify-center font-medium tracking-wide bg-green-600 hover:bg-green-700 px-4 py-2.5 rounded-md text-sm text-white cursor-pointer"
                >
                  Apply
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

  )
}