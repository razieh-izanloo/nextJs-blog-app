import { Header } from "@/components/header";

export function generateMetadata() {
  return {
    title: {
      template: `%s |  بلاگ اپ`,
      default: "بلاگ اپ",
    },
    description: "وب اپلیکیشن بلاگ ها و مدیریت نظرات",
  };
}

export const BlogLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="container xl:max-w-screen-xl">{children}</div>
    </>
  );
};
export default BlogLayout;
