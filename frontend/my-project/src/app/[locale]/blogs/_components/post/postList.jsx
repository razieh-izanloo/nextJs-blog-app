import { CardPost } from "./cardPost";

export const PostList = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/list`);

  const {
    data: { posts },
  } = await res.json();

  return (
    <>
      {posts?.length > 0 ? (
        <div className="row mx-0">
          {posts.map((item) => (
            <CardPost key={item._id} item={item}/>
          ))}
        </div>
      ) : null}
    </>
  );
};
