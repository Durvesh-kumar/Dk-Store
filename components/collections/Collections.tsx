import { getCollections } from "@/lib/actions";
import { CollectionType } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

const Collections = async () => {
  const collections = await getCollections();

  return (
    <div>
      <p className="text-3xl font-bold flex items-center justify-center my-10">
        Collections
      </p>
      {!collections || collections?.length == 0 ? (
        <p>Collections not found</p>
      ) : (
        <div className="sm:grid-cols-1 xl:grid-cols-4 xxl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-5 mb-5">
        <div className="flex items-center flex-wrap justify-center gap-10">
          {collections?.map((collection: CollectionType) => (
            <Link
              href={`/collections/${collection._id}`}
              key={collection._id}
              className="w-[300px] h-[180px] relative"
            >
              <Image
                src={collection.image}
                alt={collection.title}
                width={300}
                height={180}
                className="w-full h-full cursor-pointer rounded-xl border absolute"
              />
              <p className=" opacity-90 text-white text-xl pl-3 mt-2 flex flex-wrap">{collection?.title}</p>
              <p className="bg-transparent border hover:shadow-md hover:border-black hover:bg-slate-400 hover:text-black border-b-slate-500 px-4 py-1 opacity-90 w-fit rounded text-gray-500 absolute bottom-3 left-[80px]">Read more...</p>
            </Link>
          ))}
        </div>
        </div>
      )}
    </div>
  );
};

export default Collections;
