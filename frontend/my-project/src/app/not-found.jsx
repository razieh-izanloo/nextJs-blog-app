import Image from "next/image";
import { BtnBack } from "@/components/btnBack";
import "./not-found.scss";

export const metadata = {
  title: "صفحه پیدا نشد",
};

const NotFound = () => {
  return (
    <div id="section-notFound">
      <div id="not-found">
        <Image
          src="/images/404.svg"
          alt="Animated 404 error page showing a cat playing with a ball of yarn"
          fill
        />
        <BtnBack title="بازگشت" />
      </div>
    </div>
  );
};

export default NotFound;
