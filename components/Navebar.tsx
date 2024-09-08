"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import { CircleUserRound, Menu, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navebar = () => {
  const { user } = useUser(); // this use only client side
  // console.log(user);
  
  
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="sticky top-0 left-0 z-10 py-2 px-10 flex justify-between items-center bg-white border-b shadow-md mb-5">
      <Link href="/">
        <Image src="/logo2.jpg" alt="compnay-logo" height={100} width={100} />
      </Link>
      <Link href="/">Home</Link>
      <div className="flex items-center relative gap-x-4">
        <Link
          href="/cart"
          className="flex rounded-2xl items-center gap-3 px-2 py-1 border hover:bg-gray-950 hover:text-white"
        >
          <p className=" font-bold">Cart(0)</p>
          <ShoppingCart />
        </Link>
        {user && <Menu onClick={()=> setIsOpen(!isOpen)} className=" cursor-pointer" />}
          {
            user && isOpen && (
              <div className="flex gap-4 top-10 left-0 absolute flex-col border shadow-lg py-6 rounded-xl px-1 bg-white">
                <Link href={'/wishlist'} className="hover:text-red-600 hover:bg-slate-200 px-6">WishList</Link>
                <Link href={'/order'} className="hover:text-red-600 hover:bg-slate-200 px-6">Order</Link>
              </div>
            )
          }

          {user ? <UserButton afterSignOutUrl="/sign-in"/> : <Link href={'/sign-in'}><CircleUserRound/></Link>}
      </div>
    </div>
  );
};

export default Navebar;
