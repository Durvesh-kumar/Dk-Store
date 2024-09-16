"use client";
import indianCurrency from "@/lib/indianCurrancy";
import { ProductType, UserType } from "@/lib/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import HeartFavorites from "../Heart";
import Link from "next/link";

interface ProductCardPropes {
  product: ProductType;
  updateSignedInUser?: (updateUser:UserType)=> void;
}

const ProductCard: React.FC<ProductCardPropes> = ({ product, updateSignedInUser }) => {
  return (
      <Link
      href={`/products/${product?._id}`}
        
      >
        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl border">
          <div className="h-72 w-72 rounded-t-xl">
          <Image
          src={product?.media[0]}
          alt="Product"
          width={300}
          height={500}
          className=" w-full h-full object-fill rounded-t-xl"
        />
          </div>
        
        <div className="px-4 py-3 w-72 bg-gray-200">
          <span className="text-gray-950 bg-red-500 rounded-xl px-3 py-1 animate-pulse mr-3 uppercase text-xs">
            {product?.brand}
          </span>
          <p className="text-lg font-bold text-black truncate block capitalize">
            {product?.title}
          </p>
          <div className="flex items-center">
            <p className="text-lg font-semibold text-black cursor-auto my-3">
              {indianCurrency(product?.pay)}
            </p>
            <del>
              <p className="text-sm text-gray-600 cursor-auto ml-2">
                {indianCurrency(product?.price)}
              </p>
            </del>
            <div className="ml-auto">
              <HeartFavorites updateSignedInUser={updateSignedInUser} productId={product?._id} />
            </div>
          </div>
        </div>
        </div>
      </Link>
  );
};

export default ProductCard;
