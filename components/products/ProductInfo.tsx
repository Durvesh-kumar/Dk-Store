"use client"
import { ProductType } from "@/lib/types";
import HeartFavorites from "../Heart";

interface ProductInfoProps {
  productDetails: ProductType;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ productDetails }) => {

  return (
    <div className="flex flex-col gap-3">
      <p className="w-fit px-4 py-1 rounded-2xl animate-pulse bg-red-600 text-gray-950">
        {productDetails?.brand}
      </p>
      <div className="flex items-center justify-between">
        <p>{productDetails?.title}</p>
        <HeartFavorites productId={productDetails?._id}/>
      </div>
    </div>
  );
};

export default ProductInfo;
