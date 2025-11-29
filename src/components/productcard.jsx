import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import ProductdetailModal from './ProductdetailModal'
import { useDispatch } from 'react-redux'
import { addtoCart } from '@/redux/cartSlice'
import Swal from 'sweetalert2'
const Productcard = ({id="", product, name, price, image, description }) => {
  // const [product,setisproduct]=
  const [isopen, setisopen] = useState(false)
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addtoCart(product))

    Swal.fire({
      icon: 'success',
      title: 'Item Added to Cart!',
      text: 'Your product has been successfully added.',
      showConfirmButton: false,
      timer: 1500
    });
  }
  return (
    <div>
      <div

        className="scale-100 hover:scale-105 transition-all duration-500 ease-in-out bg-gray-800 border  shadow-md w-full max-w-sm rounded-2xl overflow-hidden mx-auto mt-4">
        <div className="aspect-3/2" onClick={() => setisopen(!isopen)}>
          <img src={image} className="w-full h-full object-cover rounded-2xl" />
        </div>

        <div className="p-6">
          <h3 className="text-lg text-slate-100 font-semibold">{name}</h3>
          {id}
          <button type="button" className="flex items-center text-green-600 text-sm font-medium bg-green-50 px-3 py-1.5 tracking-wide rounded-full cursor-pointer">
            Save 20%
          </button>
          <div className="flex items-center">
            <h3 className="text-xl text-slate-100 font-semibold flex-1">Rs{price}</h3>
            <div className="bg-pink-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer">
              <FaPlus onClick={() => handleAddToCart(product)} />
            </div>
          </div>
        </div>
      </div>

      {
        isopen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-all duration-300">
            <ProductdetailModal name={name} image={image} price={price} description={description} SetisOpen={setisopen} isOpen={isopen} />
          </div>
        )
      }
    </div>

  )
}

export default Productcard