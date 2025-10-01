import { fetchHardData } from "@/services/data";
import { Card } from "./card"; 

export const CardWarpper = async () => {
  const { numberOfUsers, numberOfComments, numberOfPosts } =
    await fetchHardData();

  return (
    <div className="grid gap-6 md:grid-cols-3 mb-8">
        <Card title="کاربران" value={numberOfUsers} type="users" />
        <Card title="پست ها" value={numberOfPosts} type="posts" />
        <Card title="نظرات" value={numberOfComments} type="comments" />
      </div>
  );
};
