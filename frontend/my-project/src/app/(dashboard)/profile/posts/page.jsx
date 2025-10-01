import { Suspense } from "react";
import { PostTable } from "./_/components/postTable";
import { Spinner } from "@/components/spinner/spinner";
import { Search } from "@/components/search";
import { CreatePost } from "./_/components/buttons";
import queryString from "query-string";
import Pagination from "@/components/pagination/pagination";
import { getPosts } from "@/services/postServices";

const PostsPage = async ({ searchParams }) => {
  const query = queryString.stringify(searchParams);
  const { totalPages } = await getPosts(query);

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-secondary-700 mb-12 items-center">
        <h1 className="text-secondary-700 font-bold text-xl">لیست پست ها</h1>
        <Search />
        <CreatePost />
      </div>
      <Suspense fallback={<Spinner />} key={query}>
        <PostTable query={query} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
};
export default PostsPage;
