import ProductCard from "@/components/products/ProductCard";
import { getSearchQuery } from "@/lib/actions/actions";
const SearchPage = async ({ params }: { params: { query: string } }) => {
  const decodedQuery = decodeURIComponent(params.query);
  const getProduct = await getSearchQuery(params.query);

  return (
    <div className="grid gap-5">
      <p className="text-2xl font-extrabold text-gray-950">
        Search result for {decodedQuery}
      </p>
      <hr className="py-0.5 bg-gray-800 shadow-lg my-5" />
      {!getProduct || getProduct.length === 0 ? (
        <p className="text-xl font-bold text-gray-800">No result found</p>
      ) : (
        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {getProduct?.map((product:ProductType) => (
            <ProductCard product={product} key={product._id} />
          ))}
        </div>
      )}
    </div>
  );
};

export const dynamic = "force-dynamic";
export default SearchPage;