import { Suspense } from "react";
import { CategoryList } from "../_components/categoryList";
import "./layout.scss";
import { Spinner } from "@/components/spinner/spinner";
import { Search } from "@/components/search/search";

export const metadata = {
  title: "بلاگ ها",
};

 function BlogLayout({ children }) {
  return (
    <div className="d-flex justify-content-center">
      <div className="layout-blog">
        <div className="d-sm-flex align-items-center mb-4">

        <h1 className="col-12 col-sm-3 col-xl-2">لیست بلاگ ها</h1>
        <div className="col-12 col-sm-8 col-xl-9 px-3">

        <Search/>
        </div>
        </div>
        <div className="d-flex">
          <div className="col-12 col-sm-3 col-xl-2">
            <Suspense fallback={<Spinner />}>
              <CategoryList />
            </Suspense>
          </div>
          <main className="col-12 col-sm-8 col-xl-9">{children}</main>
        </div>
      </div>
    </div>
  );
}
export default BlogLayout;
