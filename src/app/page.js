import Taskbar from "./components/Taskbar";
// import { useAuth } from "./store/AuthContext";

import AdCursol from "./components/Home/AdCursol";

import ProductCursol from "./components/Home/ProductCursol";

// Import Swiper styles

export default function Home() {
  const username = "ramgurush@gmail.com";

  const password = "abcd123";
  const products = [
    // Add your product data here
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" },
    { id: 4, name: "Product 4" },
    { id: 5, name: "Product 5" },
    { id: 6, name: "Product 6" },
    { id: 7, name: "Product 7" },
    { id: 8, name: "Product 8" },
    { id: 9, name: "Product 9" },
    { id: 10, name: "Product 10" },
  ];
  const data = [
    {
      image: "/path/to/image2.jpg",
      altText: "Product 2",
      title: "Product Title 2",
      description: "Product description 2",
    },
    {
      image: "/path/to/image2.jpg",
      altText: "Product 2",
      title: "Product Title 2",
      description: "Product description 2",
    },
    {
      image: "/path/to/image2.jpg",
      altText: "Product 2",
      title: "Product Title 2",
      description: "Product description 2",
    },
    {
      image: "/path/to/image2.jpg",
      altText: "Product 2",
      title: "Product Title 2",
      description: "Product description 2",
    },
    {
      image: "/path/to/image2.jpg",
      altText: "Product 2",
      title: "Product Title 2",
      description: "Product description 2",
    },
    {
      image: "/path/to/image2.jpg",
      altText: "Product 2",
      title: "Product Title 3",
      description: "Product description 3",
    },
    {
      image: "/path/to/image2.jpg",
      altText: "Product 3",
      title: "Product Title 2",
      description: "Product description 3",
    },
    // ... add more slide data objects
  ];

  // The empty dependency array ensures that this effect runs only once when the component mounts

  return (
    <main className="">
      <title>
        Online Shopping and exporting and importing goods Called as Drops
      </title>
      <meta name="description" content="Your page description for SEO" />
      {/* The rest of your code remains unchanged */}
      <Taskbar user={"ss"}></Taskbar>
      {/* <div className="text-black">{user?.email}</div> */}
      <AdCursol></AdCursol>

      {/* <button className="text-black" onClick={() => signOut()}>
        Logout
      </button> */}
      <ProductCursol slides={data} products={products}></ProductCursol>
    </main>
  );
}
