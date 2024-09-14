import { Search } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

const SearchBox = () => {
    const router = useRouter()
    const [query, setQuery] = useState('')
  return (
    <div className="flex items-center border border-gray-700 rounded-lg px-2 py-1 justify-between sm:w-96">
      <input
        onChange={(e)=> setQuery(e.target.value)}
        value={query}
        type="text"
        placeholder="Search....."
        className="outline-none"
      />
      <button disabled={query === ""} onClick={()=> router.push(`/search/${query}`)}>
        <Search className=" cursor-pointer h-4 w-4 hover:text-red-600" />
      </button>
      
    </div>
  )
}

export default SearchBox