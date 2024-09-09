"use client";
import { ProductType } from "@/lib/types";
import HeartFavorites from "../Heart";
import { useState } from "react";
import { CircleMinus, CirclePlus } from "lucide-react";
import useCart from "@/lib/hooks/useCart";

interface ProductInfoProps {
  productDetails: ProductType;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ productDetails }) => {
  const [selectColor, setSelectColor] = useState<string>(
    productDetails?.colors[0]
  );
  const [selectSize, setSelectSize] = useState<string>(
    productDetails?.sizes[0]
  );
  const [quantity, setQuantity] = useState<number>(1);

  const cart = useCart();
  return (
    <div className="flex flex-col gap-4 md:w-1/2 ">
      <p className="w-fit px-4 py-1 rounded-2xl animate-pulse bg-red-600 text-gray-950">
        {productDetails?.brand}
      </p>
      <div className="flex items-center justify-between">
        <p className="text-gray-950 font-bold text-xl">
          {productDetails?.title}
        </p>
        <HeartFavorites productId={productDetails?._id} />
      </div>

      <div className="flex items-center gap-5">
        <h3 className="text-orange-400 font-bold">Category :</h3>
        <p>{productDetails?.category}</p>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-orange-400 font-bold">Discription :</h3>
        <p>{productDetails?.discription}</p>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-orange-400 font-bold">Colors :</h3>
        <p className="flex flex-wrap gap-2 items-center">
          {productDetails?.colors.map((color, index) => (
            <span
              key={index}
              onClick={() => setSelectColor(color)}
              className={`py-0.5 px-2 border-2 border-black rounded-lg ${
                selectColor === color && "bg-black text-white"
              }`}
            >
              {color}
            </span>
          ))}
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-orange-400 font-bold">Sizes :</h3>
        <p className="flex flex-wrap gap-2 items-center">
          {productDetails?.sizes.map((size, index) => (
            <span
              key={index}
              onClick={() => setSelectSize(size)}
              className={`py-0.5 px-2 border-2 border-black rounded-lg ${
                selectSize === size && "text-white bg-black"
              }`}
            >
              {size}
            </span>
          ))}
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-orange-400 font-bold">Quantity :</h3>
        <div className="flex items-center gap-2">
          <CircleMinus
            onClick={() => quantity > 1 && setQuantity(quantity - 1)}
            className="hover:text-orange-500 cursor-pointer"
          />
          <p>{quantity}</p>
          <CirclePlus
            onClick={() => setQuantity(quantity + 1)}
            className="hover:text-orange-500 cursor-pointer"
          />
        </div>
      </div>

      <div className="flex items-center justify-center">
        <button 
          onClick={()=> {cart.addItem({item: productDetails, quantity, color: selectColor, size: selectSize})}}
          className="py-1 flex items-center justify-center bg-orange-600 font-medium hover:bg-white border-black border-2 hover:text-black text-white rounded-2xl shadow-md w-1/2">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
