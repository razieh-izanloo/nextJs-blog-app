import { Suspense } from "react";
import { PostTable } from "./_/components/postTable";
import { Spinner } from "@/components/spinner/spinner";
import { Search } from "@/components/search/search";
import { CreatePost } from "./_/components/buttons";
import "./page.scss";
import queryString from "query-string";
import Pagination from "@/components/pagination/pagination";
import { getPosts } from "@/services/postServices";

const PostsPage = async ({ searchParams }) => {
  const query = queryString.stringify(searchParams);
  const { totalPages } = await getPosts(query);

  return (
    <div className="container">
      <div className="row row-cols-md-3">
        <h2>لیست پست ها</h2>
        <Search />
        <CreatePost />
      </div>
      <Suspense fallback={<Spinner />} key={query}>
        <PostTable query={query} />
      </Suspense>
      <div className="mt-2 d-flex w-100 justify-content-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
};
export default PostsPage;
