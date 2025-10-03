import queryString from "query-string";
import { setCookieOnReq } from "@/utils/setCookieOnReq";
import { getPosts } from "@/services/postServices";
import { cookies } from "next/headers";
import { PostList } from "../../../_components/post/postList";

const Category = async ({ params, searchParams }) => {
  const { categorySlug } = params;

  const queries = `${queryString.stringify(
    searchParams
  )}&categorySlug=${categorySlug}`;

  const cookieStore = cookies();
  const options = setCookieOnReq(cookieStore);
  const { posts } = await getPosts(queries, options);

  return (
    <div>
      {posts.length === 0 ? (
        <p className="text-lg text-secondary-600">
          پستی در این دسته بندی پیدا نشد
        </p>
      ) : (
        <PostList posts={posts} />
      )}
    </div>
  );
};
export default Category;
