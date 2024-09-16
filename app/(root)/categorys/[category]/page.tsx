import ProductCard from "@/components/products/ProductCard";
import { getProductsCategory } from "@/lib/actions/actions";
import { ProductType } from "@/lib/types";

const Category = async ({ params }: { params: { category: string } }) => {
  const products = await getProductsCategory(params.category);
  return (
    <div className="grid gap-5">
      <p className="text-2xl font-extrabold text-gray-950">
        Category products {params.category}
      </p>
      <hr className="py-0.5 bg-gray-800 shadow-md my-5" />
      {!products || products.length === 0 ? (
        <h1>Product not found</h1>
      ) : (
        <div className="flex items-center justify-center flex-wrap gap-10">
          {products?.map((product: ProductType) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export const dynamic = "force-dynamic";
export default Category;
