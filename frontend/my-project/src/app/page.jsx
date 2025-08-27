import { Button } from "@/components/button";
import Link from "next/link";
import "./page.scss";

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>اپلیکیشن مدیریت بلاگ</h1>

      <div className="d-flex flex-column align-items-center px-2">
        <p>
          جایی که قراره بتونی یه اپلیکیشن بلاگ کامل رو مدیریت کنی! بتونی بلاگ
          بسازی - کامنت بگذاری و در پنلت همه اتفاقات رو رصد کنی!
        </p>
        <div className="d-flex justify-content-center mt-4 gap-4">
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
