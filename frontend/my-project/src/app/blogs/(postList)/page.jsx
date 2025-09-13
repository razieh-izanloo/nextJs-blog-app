import queryString from "query-string";
import { cookies } from "next/headers";
import { PostList } from "../_components/post/postList";
import { getPosts } from "@/services/postServices";
import { setCookieOnReq } from "@/utils/setCookieOnReq";

const BlogPage = async ({ searchParams }) => {
  const queries = queryString.stringify(searchParams);
  const cookieStore = cookies();
  const options = setCookieOnReq(cookieStore);
  const posts = await getPosts(queries, options);

  const { search } = searchParams;

  return (
    <>
      {search ? (
        <p className="mb-4 text-secondary-700">
          {posts.length === 0
            ? " هیچ پستی با این مشخصات پیدا نشد "
            : `نشان دادن ${posts.length} نتیجه برای`}
          <span className="font-bold">&quot;{search}&quot;</span>
        </p>
      ) : null}
      <PostList posts={posts} />
    </>
  );
};
export default BlogPage;
