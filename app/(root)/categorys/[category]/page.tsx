import ProductCard from "@/components/products/ProductCard";
import { getProductsCategory } from "@/lib/actions/actions";

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
        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
