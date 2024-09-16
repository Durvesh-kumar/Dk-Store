"use client";
import useCart from "@/lib/hooks/useCart";
import { UserButton, useUser } from "@clerk/nextjs";
import { CircleUserRound, Heart, House, Menu, ShoppingBag, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import SearchBox from "./SearchBox";
import { usePathname } from "next/navigation";

const Navebar = () => {
  const pathName = usePathname();
  const { user } = useUser(); // this use only client side
  
  
  const [isOpen, setIsOpen] = useState(false);

  const cart = useCart();

  return (
    <div className="sticky top-0 left-0 z-10 py-2 px-10 sm:px-5 md:px-6  bg-white border-b shadow-md mb-5 grid gap-1">
      <div className="flex justify-between items-center">
      <Link href="/">
        <Image src="/logo2.jpg" alt="compnay-logo" height={100} width={100} className=" mix-blend-multiply w-16 h-12" />
      </Link>
      <div className="max-sm:hidden">
        <SearchBox />
      </div>
      
      <div className="flex gap-4 text-gray-900 font-bold max-lg:hidden">
        <Link href="/" className={`hover:text-red-600 flex items-center gap-1 ${pathName === "/" && "text-blue-600"}`}>
           <House className="w-4 h-4 text-gray-400" />
           <span>Home</span>
        </Link>

        <Link href={user ? "/wishlists" : "/sign-in"} className={`hover:text-red-600 flex items-center gap-1 ${pathName === "/wishlists" && "text-blue-600"}`}>
           <Heart className="w-4 h-4 text-gray-400" /> 
           <span>Wishlist</span>
        </Link>

        <Link href={user ? "/orders" : "/sign-in"} className={`hover:text-red-600 flex items-center gap-1 ${pathName === "/orders" && "text-blue-600"}`}>
           <ShoppingBag className="w-4 h-4 text-gray-400"/>
           <span>Orders</span>
        </Link>
      </div>
      
      <div className="flex items-center relative gap-x-3 min-lg:hidden">
        <Link
          href="/cart"
          className={`flex rounded-2xl items-center gap-3 px-2 py-1 border hover:bg-gray-950 hover:text-white max-lg:hidden ${pathName === "/cart" && "border-blue-600"}`}
        >
          <p className=" font-bold">Cart({cart?.cartItems.length})</p>
          <ShoppingCart />
        </Link>
        <Link
          href="/cart"
          className="flex rounded-2xl items-center gap-3 px-2 py-1 lg:hidden relative"
        >
          <p className=" absolute top-[-10px] left-5 text-white bg-orange-600 px-2 border border-black rounded-full">{cart?.cartItems.length}</p>
          <ShoppingCart className="w-7 h-7" />
        </Link>
        {<Menu onClick={()=> setIsOpen(!isOpen)} className=" cursor-pointer lg:hidden" />}
          {
            isOpen && (
              <div className="flex gap-4 top-10 left-0 absolute flex-col border shadow-lg py-6 rounded-xl px-1 bg-white lg:hidden">
                  
                <Link href='/' className= {`hover:text-red-600 hover:bg-slate-200 px-6 flex items-center gap-1 ${pathName === "/" && "text-blue-600"}`}>
                   <House className="w-4 h-4 text-gray-400" />
                   <span>Home</span>
                </Link>
                <Link href={user ? "/wishlists" : "/sign-in"} className= {`hover:text-red-600 hover:bg-slate-200 px-6 flex items-center gap-1 ${pathName === "/wishlists" && "text-blue-600"}`}>
                  <Heart className="w-4 h-4 text-gray-400" /> 
                  <span>Wishlist</span>
                </Link>
                <Link href={user ? "/orders" : "/sign-in"} className= {`hover:text-red-600 hover:bg-slate-200 px-6 flex items-center gap-1 ${pathName === "/orders" && "text-blue-600"}`}>
                   <ShoppingBag className="w-4 h-4 text-gray-400"/>
                   <span>Orders</span>
                </Link>
              </div>
            )
          }

          {user ? <UserButton afterSignOutUrl="/sign-in"/> : <Link href={'/sign-in'}><CircleUserRound/></Link>}
      </div>
      </div>

      <div className="sm:hidden">
        <SearchBox />
      </div>
    </div>
  );
};

export default Navebar;
