import "bootstrap/dist/css/bootstrap.min.css";
import "react-loading-skeleton/dist/skeleton.css";
import { Toaster } from "react-hot-toast";
import vazirFont from "@/constants/localFont";
import { Header } from "@/components/header/index";
import AuthProvider from "@/context/authContext";
import "./globals.scss";

export function generateMetadata() {
  return {
    title: {
      template: `%s |  بلاگ اپ`,
      default: "بلاگ اپ",
    },
    description: "وب اپلیکیشن بلاگ ها و مدیریت نظرات",
  };
}

async function RootLayout({ children, params }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`min-vh-100  ${vazirFont.variable} font-sans `}>
        <AuthProvider>
          <Toaster />
          <Header />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
export default RootLayout;
