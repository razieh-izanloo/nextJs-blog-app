import Button from "@/components/button";
import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1 className="font-bold text-center text-2xl md:text-5xl text-secondary-800 my-20">
        اپلیکیشن مدیریت بلاگ
      </h1>

      <div>
        <div className="text-center text-secondary-500 text-lg leading-loose">
          <p>جایی که قراره بتونی یه اپلیکیشن بلاگ کامل رو مدیریت کنی!</p>
          <p>
            بتونی بلاگ بسازی - کامنت بگذاری و در پنلت همه اتفاقات رو رصد کنی!
          </p>
        </div>
        <div className="flex justify-center gap-x-8 w-full mt-10">
          <Button variant="outline">
            <Link href="/blogs">مطالعه بلاگ ها</Link>
          </Button>
          <Button variant="primary">
            <Link href="/profile">مدیریت بلاگ ها</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
