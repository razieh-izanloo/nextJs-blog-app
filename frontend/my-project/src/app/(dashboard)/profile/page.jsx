import { Suspense } from "react";
import { CardWarpper } from "./_components/cardWrapper";
import { PostTable } from "./posts/_/components/postTable";
import { Spinner } from "@/components/spinner/spinner";
import "./page.scss";

const ProfilePage = () => {
  return (
    <>
      <div className="container">
        <h1>داشبورد</h1>
        <Suspense fallback={<Spinner />}>
          <CardWarpper />
        </Suspense>
        <h2 className="mt-4">آخرین پست ها</h2>

        <Suspense fallback={<Spinner />}>
          <PostTable query="sort=latest&limit=5" />
        </Suspense>
      </div>
    </>
  );
};

export default ProfilePage;
