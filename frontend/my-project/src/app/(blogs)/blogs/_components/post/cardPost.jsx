import Image from "next/image";
import Link from "next/link";
import { ClockIcon } from "@heroicons/react/24/outline";
import { Author } from "@/components/author";
import { PostInteraction } from "./postInteraction";

export const CardPost = (props) => {
  const { item } = props;

  return (
    <div className="col-span-12 sm:col-span-6 lg:col-span-4 border border-secondary-300 p-2 rounded-lg">
      <div className="relative aspect-video overflow-hidden rounded-md mb-6">
        <Link href={`/blogs/${item.slug}`} className="overflow-hidden">
          <Image
            src={item.coverImageUrl}
            alt={item.title}
            fill
            className="object-cover object-center hover:scale-110 transition-all duration-300 ease-out"
            quality={90}
          />
        </Link>
      </div>
      <div>
        <Link href={`/blogs/${item.slug}`}>
          <h2 className="mb-4 font-bold text-secondary-700 hover:text-primary-900 transition-all ease-out">
            {item.title}
          </h2>
        </Link>
        <div className="flex items-center justify-between mb-4">
          <Author {...item.author} />
          <div className="flex items-center text-[10px] text-secondary-500">
            <ClockIcon className="w-4 h-4 stroke-secondary-500 ml-1" />
            <span className="ml-1"> خواندن:</span>
            <span className="ml-1 leading-3">{item.readingTime}</span>
            <span>دقیقه</span>
          </div>
        </div>
        <PostInteraction post={item} />
      </div>
    </div>
  );
};
