import { Button } from "@/components/button";
import Link from "next/link";

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
      classes: "text-secondary-400",
    },
    {
      title: "مدیریت بلاگ",
      url: "profile",
      variant: "primary",
      calsses: "text-white",
    },
  ];


  return (
    <div className="flex-center flex-col gap-8 h-screen">
      <h1 className="font-bold text-center text-2xl md:text-5xl text-secondary-800 my-20">
        اپلیکیشن مدیریت بلاگ
      </h1>

      <div>
        <p className="text-center text-secondary-500 text-lg leading-loose">
          جایی که قراره بتونی یه اپلیکیشن بلاگ کامل رو مدیریت کنی!
          <br /> بتونی بلاگ بسازی - کامنت بگذاری و در پنلت همه اتفاقات رو رصد
          کنی!
        </p>
        <div className="flex justify-center mt-4 gap-4">
          {btnsLink.map((item) => (
            <Button variant={item.variant} key={item.url}>
              <Link href={item.url} className={item.calsses}>
                {item.title}
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
