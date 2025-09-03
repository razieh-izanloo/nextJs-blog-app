import { getPosts } from "@/services/postServices";
import { CardPost } from "./cardPost";

export const PostList = async () => {
  const posts = await getPosts();

  return (
    <>
      {posts?.length > 0 ? (
        <div className="row mx-0">
          {posts.map((item) => (
            <CardPost key={item._id} item={item} />
          ))}
        </div>
      ) : null}
    </>
  );
};
