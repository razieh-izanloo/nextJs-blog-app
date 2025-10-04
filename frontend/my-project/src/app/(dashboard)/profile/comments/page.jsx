import { Suspense } from "react";
import CommentsTable from "./_/components/CommentsTable";
import Loading from "../../../(blogs)/blogs/loading";

 const CommentsPage = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-secondary-700 mb-8 font-bold text-xl">
          لیست نظرات
        </h1>
      </div>
      <Suspense fallback={<Loading />}>
        <CommentsTable />
      </Suspense>
    </div>
  );
};
export default CommentsPage;