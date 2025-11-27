import React from 'react'
import { adminStats } from '@/components/stats'
const Dashboard = () => {
  return (
     <div className='flex flex-col pr-3'>
      <h1 className='text-white font-normal text-4xl p-6'>Hi,Mahad</h1>
        <h1 className='text-white font-normal text-4xl p-6'>This Month has maximum number of sales so far.</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3   gap-4  p-4">
          {adminStats.map((stat) => (
            <div
              key={stat.id}
              className="border border-gray-200 shadow-md w-full rounded-lg overflow-hidden "
            >
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {stat.icon}
                    <h3 className="text-lg font-semibold text-white">{stat.action}</h3>
                  </div>
                  <span className="text-xl font-bold text-white">{stat.value}</span>
                </div>

                <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                  {stat.description}
                </p>

                <button
                  type="button"
                  className="mt-6 px-5 py-2 rounded-md text-white text-sm font-medium tracking-wider border-none outline-none bg-blue-600 hover:bg-blue-700 cursor-pointer"
                >
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
  )
}

export default Dashboard