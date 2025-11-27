import React from 'react'

const Orders = () => {
  return (
    <div className="p-4">
  <div className="max-w-screen-lg mx-auto">
    <div className="border-b border-gray-300 pb-4">
      <div className="flex items-center flex-wrap gap-4">
        <h3 className="text-2xl font-semibold text-white">Order History</h3>
        <div className="ml-auto">
          <select className="appearance-none cursor-pointer text-white border border-gray-300 outline-0 px-4 py-2  rounded-md text-[15px]">
            <option className='text-black'>All orders</option>
            <option className='text-black'>Completed</option>
            <option className='text-black'>Processing</option>
            <option className='text-black'>Cancelled</option>
          </select>
        </div>
      </div>
    </div>
    <div className="divide-y divide-gray-300 mt-6">
      <div className="grid grid-cols-5 max-md:grid-cols-2 items-start justify-between gap-6 py-4">
        <div className="md:col-span-2 flex items-start gap-4 max-sm:flex-col">
          <div className="bg-gray-100 p-2 rounded-lg w-20 h-20 shrink-0">
            <img
              src="https://readymadeui.com/images/dark-green-tshirt-2.webp"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h6 className="text-[15px] font-semibold text-white">
              T-shirt
            </h6>
            <div className="mt-2">
              <p className="text-[15px] text-gray-200 font-medium">
                Order ID: <span className="ml-1 text-white">#5381</span>
              </p>
            </div>
          </div>
        </div>
        <div>
          <h6 className="text-[15px] font-medium text-gray-200">Date</h6>
          <p className="text-[15px] text-white font-medium mt-2">
            May 12, 2025
          </p>
        </div>
        <div>
          <h6 className="text-[15px] font-medium text-gray-200">Status</h6>
          <p className="bg-green-100 text-[13px] font-medium text-green-600 mt-2 inline-block rounded-md py-1.5 px-3">
            Completed
          </p>
        </div>
        <div className="md:ml-auto">
          <h6 className="text-[15px] font-medium text-gray-200">Price</h6>
          <p className="text-[15px] text-white font-medium mt-2">$20.00</p>
        </div>
      </div>
      <div className="grid grid-cols-5 max-md:grid-cols-2 items-start justify-between gap-6 py-4">
        <div className="md:col-span-2 flex items-start gap-4 max-sm:flex-col">
          <div className="bg-gray-100 p-2 rounded-lg w-20 h-20 shrink-0">
            <img
              src="https://readymadeui.com/images/product14.webp"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h6 className="text-[15px] font-semibold text-white">
              Echo Elegance
            </h6>
            <div className="mt-2">
              <p className="text-[15px] text-gray-200 font-medium">
                Order ID: <span className="ml-1 text-white">#9515</span>
              </p>
            </div>
          </div>
        </div>
        <div>
          <h6 className="text-[15px] font-medium text-gray-200">Date</h6>
          <p className="text-[15px] text-white font-medium mt-2">
            April 22, 2025
          </p>
        </div>
        <div>
          <h6 className="text-[15px] font-medium text-gray-200">Status</h6>
          <p className="bg-blue-100 text-[13px] font-medium text-blue-600 mt-2 inline-block rounded-md py-1.5 px-3">
            Processing
          </p>
        </div>
        <div className="md:ml-auto">
          <h6 className="text-[15px] font-medium text-gray-200">Price</h6>
          <p className="text-[15px] text-white font-medium mt-2">$24.00</p>
        </div>
      </div>
      <div className="grid grid-cols-5 max-md:grid-cols-2 items-start justify-between gap-6 py-4">
        <div className="md:col-span-2 flex items-start gap-4 max-sm:flex-col">
          <div className="bg-gray-100 p-2 rounded-lg w-20 h-20 shrink-0">
            <img
              src="https://readymadeui.com/images/watch5.webp"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h6 className="text-[15px] font-semibold text-white">
              Smart Watch Timex
            </h6>
            <div className="mt-2">
              <p className="text-[15px] text-gray-200 font-medium">
                Order ID: <span className="ml-1 text-white">#8362</span>
              </p>
            </div>
          </div>
        </div>
        <div>
          <h6 className="text-[15px] font-medium text-gray-200">Date</h6>
          <p className="text-[15px] text-white font-medium mt-2">
            May 7, 2025
          </p>
        </div>
        <div>
          <h6 className="text-[15px] font-medium text-gray-200">Status</h6>
          <p className="bg-red-100 text-[13px] font-medium text-red-600 mt-2 inline-block rounded-md py-1.5 px-3">
            Cancelled
          </p>
        </div>
        <div className="md:ml-auto">
          <h6 className="text-[15px] font-medium text-gray-200">Price</h6>
          <p className="text-[15px] text-white font-medium mt-2">$20.00</p>
        </div>
      </div>
      <div className="grid grid-cols-5 max-md:grid-cols-2 items-start justify-between gap-6 py-4">
        <div className="md:col-span-2 flex items-start gap-4 max-sm:flex-col">
          <div className="bg-gray-100 p-2 rounded-lg w-20 h-20 shrink-0">
            <img
              src="https://readymadeui.com/images/sunscreen-img-4.webp"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h6 className="text-[15px] font-semibold text-white">
              Sunscreen
            </h6>
            <div className="mt-2">
              <p className="text-[15px] text-gray-200 font-medium">
                Order ID: <span className="ml-1 text-white">#8195</span>
              </p>
            </div>
          </div>
        </div>
        <div>
          <h6 className="text-[15px] font-medium text-gray-200">Date</h6>
          <p className="text-[15px] text-white font-medium mt-2">
            May 10, 2025
          </p>
        </div>
        <div>
          <h6 className="text-[15px] font-medium text-gray-200">Status</h6>
          <p className="bg-green-100 text-[13px] font-medium text-green-600 mt-2 inline-block rounded-md py-1.5 px-3">
            Completed
          </p>
        </div>
        <div className="md:ml-auto">
          <h6 className="text-[15px] font-medium text-gray-200">Price</h6>
          <p className="text-[15px] text-white font-medium mt-2">$20.00</p>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Orders