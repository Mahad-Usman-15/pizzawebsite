import React, { useState } from "react";
import { Upload } from "lucide-react";
import Card from '@/components/card'
const cards = [
  {
    id: 0,
    action: "Add a product",
    description: "You can view all the products and perform CRUD operations.",
    link: "/"
  },
  {
    id: 1,
    action: "Delete a product",
    description: "You can view all the orders and perform CRUD operations.",
    link: "/"
  },
  {
    id: 2,
    action: "Update a product",
    description: "You can view all the products and perform CRUD operations.",
    link: "/"
  },
]
function AddProduct() {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    quantity: "",
    category: "",
    image: null,
  });

  const [imagePreview, setImagePreview] = useState(null);

  // handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setProduct((prev) => ({ ...prev, image: file }));

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Product Added:", product);
    alert("✅ Product added successfully!");
    setProduct({
      name: "",
      description: "",
      price: "",
      quantity: "",
      category: "",
      image: null,
    });
    setImagePreview(null);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-8 max-w-xl mx-auto border p-6 rounded-lg shadow-md"
    >

      <div>
        <label className="mb-2 text-sm text-white font-medium block">
          Product Name
        </label>
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          placeholder="Enter product name"
          className="px-4 py-3 text-sm text-white rounded  border border-gray-400 w-full outline-[#333]"
        />
      </div>


      <div>
        <label className="mb-2 text-sm text-white font-medium block">
          Product Description
        </label>
        <textarea
          name="description"
          value={product.description}
          onChange={handleChange}
          placeholder="Enter product description"
          rows="3"
          className="px-4 py-3 text-sm text-white rounded  border border-gray-400 w-full outline-[#333]"
        ></textarea>
      </div>


      <div>
        <label className="mb-2 text-sm text-white font-medium block">
          Product Price ($)
        </label>
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          placeholder="Enter product price"
          className="px-4 py-3 text-sm text-white rounded  border border-gray-400 w-full outline-[#333]"
        />
      </div>

      <div>
        <label className="mb-2 text-sm text-white font-medium block">
          Product Quantity
        </label>
        <input
          type="number"
          name="quantity"
          value={product.quantity}
          onChange={handleChange}
          placeholder="Enter available quantity"
          className="px-4 py-3 text-sm text-white rounded  border border-gray-400 w-full outline-[#333]"
        />
      </div>


      <div>
        <label className="mb-2 text-sm text-white font-medium block">
          Product Category
        </label>
        <select
          name="category"
          value={product.category}
          onChange={handleChange}
          className="px-4 py-3 text-sm text-white rounded  border border-gray-400 w-full outline-[#333]"
        >
          <option value="">Select category</option>
          <option value="men">Men’s Fashion</option>
          <option value="women">Women’s Fashion</option>
          <option value="accessories">Accessories</option>
          <option value="shoes">Shoes</option>
          <option value="fragrance">Fragrance</option>
        </select>
      </div>

      <div>
        <label className="mb-2 text-sm text-white font-medium block">
          Product Image
        </label>
        <div className="border border-gray-400 rounded-lg p-4 text-center">
          {imagePreview ? (
            <img
              src={imagePreview}
              alt="Preview"
              className="w-32 h-32 object-cover mx-auto rounded-md"
            />
          ) : (
            <div className="flex flex-col items-center justify-center text-gray-500">
              <Upload className="w-6 h-6 mb-2" />
              <p className="text-sm">Upload product image</p>
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-3 text-sm text-white w-full"
          />
        </div>
      </div>


      <button
        type="submit"
        className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-md transition"
      >
        Add Product
      </button>
    </form>
  );
}


export default function Products() {
  return (
    <div className="flex flex-col md:flex-row items-center p-4  gap-3">
      {
        cards.map((card) => (
          <Card action={card.action} description={card.description} key={card.id} link={card.link} />
        ))
      }
    </div>
  )
}