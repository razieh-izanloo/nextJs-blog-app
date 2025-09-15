import { Header } from "@/components/header/index";

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
      {children}
    </>
  );
};
export default BlogLayout;
