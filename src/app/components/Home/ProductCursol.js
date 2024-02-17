"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";

function ProductCursol() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Function to fetch products using Axios
    const fetchProducts = async () => {
      try {
        // Replace 'your-api-endpoint' with the actual endpoint for fetching products
        const response = await axios.post("http://localhost:3029/product", {
          page: 1,
          pageSize: 10,
          category: "Electronics",
        });
        setProducts((prevData) => [...prevData, ...response.data.docs]); // Assuming your response contains an array of products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    // Call the fetchProducts function
    fetchProducts();
  }, []); // Empty dependency array to ensure the effect runs only once on mount

  const slideLeft = () => {
    var slider = document.getElementById("slider" + 1);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider" + 1);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className="max-[600px]:hidden">
      <h2 className="text-white font-bold md:text-xl p-4">wkjew</h2>
      <div className="relative flex items-center justify-center   group">
        <div
          onClick={slideLeft}
          className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        >
          ++
        </div>
        <div
          id={"slider" + 1}
          className="w-full  justify-center items-center overflow-y-hidden  overflow-x-auto  whitespace-nowrap scroll-smooth  no-scrollbar col-span-1 relative"
        >
          {products.map((product) => (
            <div
              key={product.id} // Assuming your product object has an 'id' property
              className="  w-[150px] rounded-md  border-2 items-center justify-center   sm:w-[200px] md:w-[200px] text-wrap lg:w-[200px] inline-block cursor-pointer relative p-2 text-center  transition duration-300  mx-2 overflow-hidden text-wrap"
            >
              <Image
                src={product.imageUrl[0]} // Replace with the actual property for the image URL in your product object
                width={300}
                height={400}
                alt={product.productName} // Replace with the actual property for the product name in your product object
                className="rounded-md object-contain  aspect-[4/3]"
              />

              <p className="text-wrap ">{product.productName}</p>
            </div>
          ))}
        </div>

        <div
          onClick={slideRight}
          className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
        >
          --
        </div>
      </div>
    </div>
  );
}

export default ProductCursol;
