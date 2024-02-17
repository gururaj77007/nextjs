"use client";
import Image from "next/image";

import Head from "next/head";

import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import { ShoppingCart } from "@mui/icons-material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Person4Icon from "@mui/icons-material/Person4";
import { useSession } from "next-auth/react";

// import { SearchTwoToneIcon } from "@heroicons/react/outline";

function Taskbar({ user }) {
  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/signin");
    },
  });
  return (
    <header className="">
      <Head>
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
          rel="stylesheet"
        /> */}
      </Head>
      <div className="  flex items-center text-[#fff] flex-grow  py-1 ">
        <div className="ml-1 text-[#000] flex-shrink mr-2flex items-center flex-grow sm:flex-grow-0">
          <h1 className=" font-serif">DROPS</h1>
        </div>
        <div className="bg-butoon  h-10  flex-grow  rounded items-center sm:flex hidden ">
          <input
            className=" p-2 h-full w-6  flex-grow focus:outline-none"
            type="text"
          ></input>
          <SearchTwoToneIcon className=" h-12 "></SearchTwoToneIcon>
        </div>

        <div className="text-white flex items-center text-xs space-x-6 mx-6 cursor-pointer">
          <div className=" flex-col items-center justify-center hover:underline">
            <Person4Icon className=" text-[#000] h-5 mr-1" />
            {user ? (
              <p className="text-[#000] hidden sm:block">
                {session?.data?.user?.email}
              </p>
            ) : (
              <p className="text-[#000] hidden sm:block">Sign in</p>
            )}
          </div>

          <div className="text-white cursor-pointer hover:underline flex items-center">
            <ShoppingBagIcon className="text-[#000] h-5 mr-1" />
            <p className="text-[#000] hidden sm:block  ">Return Order</p>
          </div>
          <div className="flex items-center hover:underline">
            <ShoppingCart className="text-[#000] h-10 cursor-pointer hover:underline" />
            <p className="text-[#000] hidden sm:block ">Basket</p>
          </div>
        </div>
      </div>
      <div className=" flex  bg-butoon m-2  h-10  flex-grow  rounded items-center  sm:hidden  ">
        <input
          className=" p-2 h-full w-6  flex-grow focus:outline-none"
          type="text"
        ></input>
        <SearchTwoToneIcon className=" h-12 "></SearchTwoToneIcon>
      </div>
    </header>
  );
}

export default Taskbar;
