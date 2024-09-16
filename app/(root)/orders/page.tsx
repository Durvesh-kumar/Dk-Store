import { getOrders } from "@/lib/actions/actions";
import indianCurrency from "@/lib/indianCurrancy";
import { auth } from "@clerk/nextjs/server";
import { IndianRupee } from "lucide-react";
import Image from "next/image";

const Orders = async () => {
  const { userId } = auth();
  const orders = await getOrders(userId as string);

  return (
    <div className="grid gap-5">
      <h1 className="text-xl font-bold text-gray-800">Your Orders</h1>
      {!orders || orders.length === 0 ? (
        <p>Your have no orders yet.</p>
      ) : (
        <div className="flex flex-col gap-10">
          {orders?.map((order: OrderType) => (
            <div key={order._id} className="flex flex-col gap-8 p-4 hover:bg-gray-50 bg-pink-50 rounded-lg shadow-md border">
              <div className="flex gap-20 max-md:flex-col max-md:gap-3">
                <p className="text-lg font-semibold">Order ID: {order?._id}</p>
                <p className="text-lg font-semibold flex items-center gap-2">
                   <span>Tolte Amount:</span> <IndianRupee className="w-4 h-4" />
                  {order?.totalAmount}
                </p>
              </div>

              <div className="flex flex-col gap-5">
                {order?.products?.map((orderItem: OrderItemType) => (
                  <div className="flex gap-20 max-md:gap-3 max-md:flex-col">
                  <div className="flex gap-4 max-md:flex-col" key={orderItem._id}>
                    <Image
                      src={orderItem?.product.media[0]}
                      alt={orderItem?.product.title}
                      width={500}
                      height={500}
                      className="h-32 w-32 object-fill rounded-lg"
                    />
                    <div className="flex flex-col items-start justify-between">
                        <p className="text-xl">Title: <span>{orderItem?.product.title}</span></p>
                        {
                            orderItem?.color &&(
                                <p>
                                    Color: {" "}
                                    <span>
                                        {orderItem.color}
                                    </span>
                                </p>
                            )
                        }
                        {
                            orderItem?.size &&(
                                <p>
                                    Size: {" "}
                                    <span>
                                        {orderItem.size}
                                    </span>
                                </p>
                            )
                        }
                        {
                            orderItem?.quantity &&(
                                <p>
                                    Quantity: {" "}
                                    <span>
                                        {orderItem.quantity}
                                    </span>
                                </p>
                            )
                        }
                    </div>
                    
                  </div>
                  <div>
                    <p className="text-lg flex items-center gap-2"><span className="font-semibold">Price: </span><span className="text-gray-400 line-through">{indianCurrency(orderItem?.product.price)}</span></p>
                    <p className="text-lg flex items-center gap-2"><span className="font-semibold">Pay: </span><span className="text-gray-800">{indianCurrency(orderItem?.product.pay)}</span></p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export const dynamic = "force-dynamic";
export default Orders;