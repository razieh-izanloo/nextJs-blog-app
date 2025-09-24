import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import { CreatePostForm } from "./_/createPostForm";
import "./page.scss";

const CreatePostPage = () => {
  return (
    <div className="container">
      <Breadcrumbs
        breadcrumbs={[
          {
            label: "پست ها",
            href: "/profile/posts",
          },

          {
            label: "ایجاد پست",
            href: "/profile/posts/create",
            active: true,
          },
        ]}
      />
      <CreatePostForm/>
    </div>
  );
};
export default CreatePostPage;
