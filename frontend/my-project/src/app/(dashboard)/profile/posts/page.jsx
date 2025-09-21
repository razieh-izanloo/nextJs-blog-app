import { Suspense } from "react";
import { PostTable } from "./_/components/postTable";
import { Spinner } from "@/components/spinner/spinner";
import { Search } from "@/components/search/search";
import { CreatePost } from "./_/components/buttons";
import "./page.scss";
import queryString from "query-string";

const PostsPage = ({ searchParams }) => {
  const query = queryString.stringify(searchParams);

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
    </div>
  );
};
export default PostsPage;
