import { serverSideTranslation } from "lib/i18n/initTranslations";
import { Button } from "@/components/button/button";
import Link from "next/link";
import "./page.scss";


export async function generateMetadata({params}) {
  const { locale } = await params;
  const { t } = await serverSideTranslation(locale, ["home"]);

  return {
    title:{
      absolute: t("titlePage")
    }
  };
}

const HomePage = async ({ params }) => {
  const { locale } = await params;
  const { t } = await serverSideTranslation(locale, ["home"]);

  const btnsLink = [
    {
      title: "studyBlog",
      url: "blogs",
      variant: "outline",
    },
    {
      title: "manageBlog",
      url: "profile",
      variant: "primary",
    },
  ];

  return (
    <div className="home-page">
      <h1>{t("title")}</h1>
      <div className="d-flex flex-column align-items-center px-2">
        <p>{t("description")}</p>
        <div className="d-flex justify-content-center mt-4 gap-4">
          {btnsLink.map((item) => (
            <Button variant={item.variant} key={item.url}>
              <Link href={`${locale}/${item.url}`}>{t(item.title)}</Link>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
