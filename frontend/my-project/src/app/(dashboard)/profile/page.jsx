import { fetchHardData } from "@/services/data";
import { Card } from "./_components/card";
import "./page.scss";

const ProfilePage = async () => {
  const { numberOfUsers, numberOfComments, numberOfPosts } =
    await fetchHardData();

  return (

      <div className="container">
        <div className="row gx-2">
          <Card title="کاربران" value={numberOfUsers} type="users" />
          <Card title="پست ها" value={numberOfPosts} type="posts" />
          <Card title="نظرات" value={numberOfComments} type="comments" />
        </div>
      </div>

  );
};

export default ProfilePage;
