import "bootstrap/dist/css/bootstrap.min.css";
import "react-loading-skeleton/dist/skeleton.css";
import { headers } from "next/headers";
import { serverSideTranslation } from "@/lib/i18n/initTranslations";
import vazirFont from "@/constants/localFont";
import { Header } from "@/components/header/index";
import "./globals.scss";

export async function generateMetadata() {
  const headersList = await headers();
  const locale = headersList.get("x-next-i18n-router-locale");
  const { t } = await serverSideTranslation(locale, ["rootLayout"]);
  return {
    title: {
      template: `%s |  ${t("title")}`,
      default: t("title"),
    },
    description: t("description"),
  };
}

async function RootLayout({ children, params }) {
  const headersList = await headers();
  const locale = headersList.get("x-next-i18n-router-locale");

  return (
    <html lang={locale} dir="auto">
      <body className={`min-vh-100  ${vazirFont.variable} font-sans `}>
        <Header />
        {children}
      </body>
    </html>
  );
}
export default RootLayout;
