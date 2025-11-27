
const ProductdetailModal = ({ name,price, description, image, isOpen, SetisOpen }) => {
  // const [products, setisProducts] = useState([])

  // useEffect(() => {
  //   let isMounted = true;

  //   const fetchProducts = async () => {
  //     try {
  //       const response = await fetch("http://localhost:5000/api/products", {
  //         method: "GET",
  //         headers: { "Content-Type": "application/json" },
  //       });

  //       if (!response.ok) throw new Error("Error fetching products");

  //       const data = await response.json();
  //       if (isMounted) setisProducts(data);
  //     } catch (error) {
  //       console.error("Error =>", error);
  //     }
  //   };

  //   fetchProducts();

  //   return () => {
  //     isMounted = false;
  //   };
  // }, []);
  // const productid = useParams()
  // const product =products.find((prod) => prod._id === productid)
  return (
    <div className="tracking-wide max-w-6xl mx-auto">
      <div className="bg-white md:min-h-[600px] grid items-start grid-cols-1 md:grid-cols-2 gap-8">
        <button
          className="absolute top-3 right-3 text-gray-600 hover:text-black"
          onClick={() => SetisOpen(!isOpen)}
        >
          ✖
        </button>
        <div className="h-full">
          <div className="p-4 relative h-full flex items-center justify-center">
            <img
              src={image}
              alt="Product"
              className="w-full h-full rounded-xl object-contain"
            />

          </div>
        </div>



        <div className="bg-gradient-to-r from-gray-600 via-gray-600 to-gray-700 py-6 px-8 h-full">
          <div>
            <h2 className="sm:text-3xl text-2xl font-medium text-white">
              {name}
            </h2>
            <p className="text-sm text-gray-400 mt-2">{description}</p>
          </div>
          <div className="flex flex-wrap gap-4 justify-between mt-8">
            <h3 className="text-white sm:text-4xl text-3xl font-medium">{price}</h3>

          </div>
          <div className='flex flex-col mt-5 '>
            <h2 className='font-bold text-white text-4xl'>Addons</h2>
            <div className="mt-4">
              {["Cheese", "Meat", "Mayo", "Mushroom", "Olives"].map((addon, index) => {
                const id = `addon-${index}`;
                return (
                  <div className="flex items-center gap-2" key={id}>
                    <input
                      id={id}
                      type="radio"
                      name="addons"
                      value={addon}
                      className="w-5 h-5 hidden peer"
                    />

                    <label
                      htmlFor={id}
                      className="relative flex items-center justify-center p-1 
            peer-checked:before:hidden before:block before:absolute 
            before:w-full before:h-full before:bg-white w-6 h-6 cursor-pointer 
            border-2 border-green-500 rounded-full overflow-hidden"
                    >

                    </label>
                    <label className='text-2xl text-white font-normal' htmlFor={id}>{addon}</label>
                  </div>
                );
              })}
            </div>

          </div>
          <div className='flex flex-col mt-5 '>
            <h2 className='font-bold text-white text-4xl'>Special Intructions</h2>
            <textarea placeholder='Enter Message'  defaultValue="" rows={6}
              className="w-full rounded-2xl px-4 mt-3 text-slate-800 placeholder:text-white border border-gray-200 focus:border-slate-900 focus:bg-transparent text-sm pt-3 outline-0 transition-all"></textarea>

          </div>



        </div>
      </div>
    </div>

  )
}

export default ProductdetailModal