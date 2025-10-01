import { Author } from "@/components/author";
import Link from "next/link";
import Image from "next/image";

export const RelatedPost = ({ posts }) => {
  return (
    <div className="mb-10">
      <p className="text-xl mb-4">پست های مرتبط</p>
      <div className="grid gap-6 grid-cols-6">
        {posts.map((item) => (
          <div
            key={item._id}
            className="col-span-6 md:col-span-3 lg:col-span-2"
          >
            <div className="relative aspect-video overflow-hidden rounded-md mb-6">
              <Link href={`/blogs/${item.slug}`}>
                <Image
                  src={item.coverImageUrl}
                  alt={item.title}
                  fill
                  className="object-cover object-center hover:scale-110 transition-all duration-300 ease-out"
                  quality={90}
                />
              </Link>
            </div>
            <div className="flex items-center justify-between">
              <Link href="/">
                <h2 className="display-6 text mb-0">{item.title}</h2>
              </Link>
              <Author {...item.author} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
