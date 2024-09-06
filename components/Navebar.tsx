"use client";
import { useUser } from "@clerk/nextjs";
import { Menu, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navebar = () => {
  const { user } = useUser(); // this use only client side
  
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="sticky top-0 left-0 z-10 py-2 px-10 flex justify-between items-center bg-white">
      <Link href="/">
        <Image src="/logo2.jpg" alt="compnay-logo" height={100} width={100} />
      </Link>
      <Link href="/">Home</Link>
      <div>
        <Link
          href="/cart"
          className="flex rounded-xl items-center gap-3 px-2 py-1 hover:bg-gray-950 hover:text-white"
        >
          <p className=" font-bold">Cart(0)</p>
          <ShoppingCart />
        </Link>
        {user && <Menu className=" cursor-default" />}
      </div>
    </div>
  );
};

export default Navebar;
