import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import { getPostById } from "@/services/postServices";
import { notFound } from "next/navigation";
import { CreatePostForm } from "../../create/_/createPostForm";

const CreatePostPage = async ({ params: { postId } }) => {
  const { post } = await getPostById(postId);

  if (!post) return notFound();
  
  return (
    <div className="container">
      <Breadcrumbs
        breadcrumbs={[
          {
            label: "پست ها",
            href: "/profile/posts",
          },

          {
            label: "ویرایش پست",
            href: `/profile/posts/${postId}/edit`,
            active: true,
          },
        ]}
      />
      <CreatePostForm postToEdit={post} />
    </div>
  );
};
export default CreatePostPage;
