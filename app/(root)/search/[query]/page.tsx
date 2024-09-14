import ProductCard from '@/components/products/ProductCard';
import { getSearchQuery } from '../../../../lib/actions';
const SearchPage = async({params}:{params: {query: string}}) => {

    const decodedQuery = decodeURIComponent(params.query)
    const getProduct = await getSearchQuery(params.query)

  return (
    <div className='grid gap-10'>
        <p>Search result for {decodedQuery}</p>
        {
            !getProduct || getProduct.length === 0 &&(
                <p className='text-xl font-bold text-gray-800'>No result found</p>
            )
        }
        {
            getProduct?.map((product: any)=>(
                <ProductCard product={product} key={product._id}/>
            ))
        }
    </div>
  )
}

export default SearchPage