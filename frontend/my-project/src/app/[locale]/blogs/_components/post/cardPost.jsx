import Image from "next/image";
import Link from "next/link";
import { ClockIcon } from "@heroicons/react/24/outline";
import "./cardPost.scss";
import { Author } from "@/components/author";

export const CardPost = (props) => {
  const { item } = props;

  return (
    <div className="col-12 col-md-6 col-lg-4 my-2">
      <div className="card card-post">
        <Link href={`/blogs/${item.slug}`} className="overflow-hidden">
          <Image
            src={item.coverImageUrl}
            className="img-card"
            quality={90}
            sizes="100%"
            width={0}
            height={0}
            alt={item.title}
          />
        </Link>
        <div className="card-body">
          <Link href="/">
            <h2 className="display-6 mb-3 text">{item.title}</h2>
          </Link>
          <div className="d-flex align-items-center justify-content-between mb-4">
            <Author {...item.author} />
            <div className="d-flex align-items-center gap-1 info">
              <ClockIcon />
              <div className="d-flex gap-1">
                <span> خواندن:</span>
                <span>{item.readingTime}</span>
                <span>دقیقه</span>
              </div>
            </div>
          </div>
          {/* <PostInteraction post={post} /> */}
        </div>
      </div>
    </div>
  );
};
