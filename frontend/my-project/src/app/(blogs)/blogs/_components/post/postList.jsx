import { CardPost } from "./cardPost";

export const PostList = ({ posts }) => {
  return (
    <>
      {posts?.length > 0 ? (
        <div className="grid grid-cols-12 gap-8">
          {posts.map((item) => (
            <CardPost key={item._id} item={item} />
          ))}
        </div>
      ) : null}
    </>
  );
};
