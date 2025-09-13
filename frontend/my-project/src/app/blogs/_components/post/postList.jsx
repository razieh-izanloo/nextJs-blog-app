import { getPosts } from "@/services/postServices";
import { CardPost } from "./cardPost";
import { setCookieOnReq } from "@/utils/setCookieOnReq";
import { cookies } from "next/headers";

export const PostList = async () => {
  const cookieStore = cookies();
  const options = setCookieOnReq(cookieStore);
  const posts = await getPosts(options);

  return (
    <>
      {posts?.length > 0 ? (
        <div className="row mx-0">
          {posts.map((item) => (
            <CardPost key={item._id} item={item} />
          ))}
        </div>
      ) : null}
    </>
  );
};
