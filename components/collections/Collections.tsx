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
        <div className="flex items-center flex-wrap justify-center gap-10">
          {collections?.map((collection: CollectionType) => (
            <Link
              href={`/collections/${collection._id}`}
              key={collection._id}
              className="w-[300px] h-[180px]"
            >
              <Image
                src={collection.image}
                alt={collection.title}
                width={300}
                height={180}
                className="w-full h-full cursor-pointer rounded-xl border"
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Collections;
