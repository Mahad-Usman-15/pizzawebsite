import React from 'react'
import { useState, useEffect } from 'react'
import Productcard from './productcard'

const ProductListing = ({ category }) => {
    const [products, setisProducts] = useState([])
    
useEffect(() => {
  let isMounted = true;

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/products", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) throw new Error("Error fetching products");

      const data = await response.json();
      if (isMounted) setisProducts(data);
    } catch (error) {
      console.error("Error =>", error);
    }
  };

  fetchProducts();

  return () => {
    isMounted = false;
  };
}, []);




    const filtered = products.filter((product) => product.category === category)

    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-3 gap-4'>
            {filtered.map((product, index) => (
                <Productcard  description={product.product.description} product={product} image={product.product.image} name={product.product.name} price={product.product.price} key={index} />
                
            ))}


        </div>
    )
}

export default ProductListing