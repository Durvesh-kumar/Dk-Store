"use client";
import useCart from "@/lib/hooks/useCart";
import indianCurrency from "@/lib/indianCurrancy";
import { CircleMinus, CirclePlus, Trash } from "lucide-react";
import Image from "next/image";
import React from "react";

const Cart = () => {
  const cart = useCart();

  const subTotal = cart.cartItems.reduce(
    (acc, cartItem) => acc + cartItem?.item.pay * cartItem?.quantity,
    0
  );
  const subTotalRound = parseFloat(subTotal.toFixed(2));
  return (
    <div className="flex max-md:flex-col py-16 gap-10">
      <div className="w-2/3 max-lg:w-full">
        <h3 className="font-bold text-2xl">Shopping Cart</h3>
        <hr className="my-5" />
        {cart?.cartItems.length === 0 ? (
          <p className="font-semibold text-lg">No item in cart</p>
        ) : (
          <div>
            {cart?.cartItems.map((cartItem) => (
              <div className=" w-full flex hover:bg-gray-50 px-5 py-3 items-center justify-between rounded-xl max-md:start-center">
                <div className="flex items-center max-lg:flex-col">
                  <Image
                    src={cartItem?.item?.media[0]}
                    alt={cartItem?.item?.title}
                    width={500}
                    height={500}
                    className=" w-36 h-36 object-fill rounded-xl"
                  />
                  <div className="flex flex-col gap-1 ml-4">
                    <p className="text-xl font-bold">{cartItem?.item?.title}</p>
                    <div className="flex gap-3 items-center">
                      <h3 className="text-orange-600 font-bold">Color :</h3>
                      {cartItem?.color && <p className="">{cartItem?.color}</p>}
                    </div>
                    <div className="flex gap-3 items-center">
                      <h3 className="text-orange-600 font-bold">Size :</h3>
                      {cartItem?.size && <p className="">{cartItem?.size}</p>}
                    </div>

                    <div>
                      <div className="flex items-center gap-3 flex-nowrap">
                        <span className="text-orange-600 font-bold">Price :</span>
                        <span className="font-medium line-through text-gray-500">
                          {indianCurrency(cartItem?.item.price)}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 flex-nowrap">
                        <span className="text-orange-600 font-bold">Pay :</span>
                        <span className="font-medium text-gray-950">{indianCurrency(cartItem?.item.pay)}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 max-md:items-center">
                  <div className="flex items-center gap-2">
                    <CircleMinus
                      onClick={() => {
                        if (cartItem.quantity > 1) {
                          cart.decresaeQuantity(cartItem?.item?._id);
                        }
                      }}
                      className="hover:text-orange-500 cursor-pointer"
                    />
                    <p>{cartItem?.quantity}</p>
                    <CirclePlus
                      onClick={() => cart.increaseQuantity(cartItem?.item?._id)}
                      className="hover:text-orange-500 cursor-pointer"
                    />
                  </div>
                </div>

                <Trash
                  className="hover:text-red-600 cursor-pointer"
                  onClick={() => cart.removeItem(cartItem?.item?._id)}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="w-1/3 max-lg:w-full flex flex-col bg-gray-50 gap-4 rounded-lg px-4 py-5">
        <p className="font-bold text-lg">
          Summary{" "}
          <span>{`(${cart?.cartItems.length} ${
            cart?.cartItems.length > 1 ? "items" : "item"
          })`}</span>
        </p>
        <div className="flex justify-between">
          <span>Total Amount</span>
          <span>{indianCurrency(subTotalRound)}</span>
        </div>
        <div className="flex items-center justify-center">
        <button className="bg-white rounded-lg border-2 border-black py-1 font-medium px-8 hover:bg-black hover:text-white flex items-center justify-center">Product to Checkout</button>
        </div>
        
      </div>
    </div>
  );
};

export default Cart;
