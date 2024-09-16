"use client";
import CartProduct from "@/components/cart/CartProduct";
import useCart from "@/lib/hooks/useCart";
import indianCurrency from "@/lib/indianCurrancy";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const Cart = () => {
  const router = useRouter();
  const { user } = useUser();
  const cart = useCart();

  const subTotal = cart.cartItems.reduce(
    (acc, cartItem) => acc + cartItem?.item.pay * cartItem?.quantity,
    0
  );
  const subTotalRound = parseFloat(subTotal.toFixed(2));

  // console.log(user);

  const customer = {
    clerkId: user?.id,
    email: user?.emailAddresses[0].emailAddress,
    name: user?.fullName,
  }
  

  const handleCheckout = async () => {
    try {
      if (!user) {
        return router.push("/sign-in");
      } else {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
          method: "POST",
          body: JSON.stringify({ cartItems:cart.cartItems, customer }),
        });
        console.log(res);
        
        if(res.ok){
          const data = await res.json();
          window.location.href= data.url;
          console.log(data);
          
        }
      }
    } catch (error) {
      console.log("[checkout_POST]", error);
    }
  };
  return (
    <div className="flex max-md:flex-col py-16 gap-10">
      <CartProduct cart={cart}/>

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
          <button onClick={handleCheckout} className="bg-white rounded-lg border-2 border-black py-1 font-medium px-8 hover:bg-black hover:text-white flex items-center justify-center">
            Product to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export const dynamic = "force-dynamic";
export default Cart;
