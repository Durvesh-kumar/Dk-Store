"use client";
import indianCurrency from "@/lib/indianCurrancy";
import { ProductType } from "@/lib/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import HeartFavorites from "../Heart";

interface ProductCartPropes {
  product: ProductType;
}

const ProductCart: React.FC<ProductCartPropes> = ({ product }) => {
  const router = useRouter()
  return (
    <div
      onClick={() => router.push(`/products/${product._id}`)}
      className="w-[200px] rounded-xl  "
    >
      <div className="h-[230px] w-[200px] px-1">
        <Image
          src={product?.media[0]}
          alt={product.title}
          width={500}
          height={1000}
          className="w-full h-full object-fill rounded-xl"
        />
      </div>
      <div className="flex flex-col gap-2 px-3 py-2">
        <p className="w-fit px-5 py-1 animate-pulse bg-red-400 text-gray-900 rounded-3xl font-bold">
          {product.brand}
        </p>
        <div>
          <p className="font-bold text-gray-950">{product.title}</p>
          <p className="text-gray-700">{product.category}</p>
        </div>
        <div className="flex justify-between items-center">
          <p>{indianCurrency(product.price)}</p>
          <HeartFavorites productId={product?._id}/>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
