import { Author } from "@/components/author";
import { CardPost } from "./post/cardPost";
import Link from "next/link";
import Image from "next/image";

export const RelatedPost = ({ posts }) => {
  return (
    <div className="mb-4">
      <p className="fs-4 mb-4">پست های مرتبط</p>
      <div className="row mx-0 flex-nowrap overflow-x-auto overflow-y-hidden pb-4">
        {posts.map((item) => (
          <div className="col-8 col-sm-5 col-md-3 my-2 card-post border-0 section-relatedPost" key={item._id}>
                 <Link href={`/blogs/${item.slug}`} className="link">
                   <Image
                     src={item.coverImageUrl}
                     quality={90}
                     fill
                     alt={item.title}
                     className="rounded-2"
                   />
                 </Link>
                 <div className="d-flex justify-content-between align-items-center py-2">
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
