import { Button } from "@/components/button/button";
import Link from "next/link";
import "./page.scss";

export function generateMetadata() {
  return {
    title: {
      absolute: "خانه | وب اپلیکیشن مدیریت بلاگ",
    },
  };
}

const HomePage = () => {
  // const { locale } = await params;
  // const { t } = await serverSideTranslation(locale, ["home"]);

  const btnsLink = [
    {
      title: "مطالعه بلاگ ها",
      url: "blogs",
      variant: "outline",
    },
    {
      title: "مدیریت بلاگ",
      url: "profile",
      variant: "primary",
    },
  ];

  return (
    <div className="home-page">
      <h1>اپلیکیشن مدیریت بلاگ</h1>
      <div className="d-flex flex-column align-items-center px-2">
        <p>
          جایی که قراره بتونی یه اپلیکیشن بلاگ کامل رو مدیریت کنی! بتونی بلاگ
          بسازی - کامنت بگذاری و در پنلت همه اتفاقات رو رصد کنی!
        </p>
        <div className="d-flex justify-content-center mt-4 gap-4">
          {btnsLink.map((item) => (
            <Button variant={item.variant} key={item.url}>
              <Link href={item.url}>{item.title}</Link>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
