import "bootstrap/dist/css/bootstrap.min.css";
import "react-loading-skeleton/dist/skeleton.css";
import { Toaster } from "react-hot-toast";
import vazirFont from "@/constants/localFont";
import { Header } from "@/components/header/index";
import AuthProvider from "@/context/authContext";
import "./globals.scss";
import ReactQueryProvider from "providers/reactQueryProvider";

export function generateMetadata() {
  return {
    title: {
      template: `%s |  بلاگ اپ`,
      default: "بلاگ اپ",
    },
    description: "وب اپلیکیشن بلاگ ها و مدیریت نظرات",
  };
}

function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`min-vh-100  ${vazirFont.variable} font-sans `}>
        <Toaster />
        <ReactQueryProvider>
          <AuthProvider>{children}</AuthProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
export default RootLayout;
