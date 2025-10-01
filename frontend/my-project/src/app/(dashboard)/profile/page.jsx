import { Suspense } from "react";
import { CardWarpper } from "./_components/cardWrapper";
import { PostTable } from "./posts/_/components/postTable";
import { Spinner } from "@/components/spinner/spinner";

const ProfilePage = () => {
  return (
    <div className="container">
      <h1 className="text-xl mb-8 text-secondary-500">داشبورد</h1>
      <Suspense fallback={<Spinner />}>
        <CardWarpper />
      </Suspense>
      <div>
        <h1 className="text-xl mb-4 text-secondary-500">آخرین پست ها</h1>
        <Suspense fallback={<Spinner />}>
          <PostTable query="sort=latest&limit=5" />
        </Suspense>
      </div>
    </div>
  );
};

export default ProfilePage;
