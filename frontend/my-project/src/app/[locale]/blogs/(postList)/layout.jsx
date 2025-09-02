import { Suspense } from "react";
import { CategoryList } from "../_components/categoryList";
import "./layout.scss";
import { Spinner } from "@/components/spinner/spinner";

export const metadata = {
  title: "بلاگ ها",
};

async function BlogLayout({ children, params }) {
  return (
    <div className="d-flex justify-content-center">
      <div className="layout-blog">
        <h1>لیست بلاگ ها</h1>
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
