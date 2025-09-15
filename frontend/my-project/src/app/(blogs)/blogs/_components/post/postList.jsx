import { CardPost } from "./cardPost";

export const PostList = ({posts}) => {
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
