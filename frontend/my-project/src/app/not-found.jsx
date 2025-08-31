import { headers } from "next/headers";
import Image from "next/image";
import { serverSideTranslation } from "@/lib/i18n/initTranslations";
import { BtnBack } from "@/components/btnBack";
import "./not-found.scss";

export async function generateMetadata() {
  return {
    title: "صفحه پیدا نشد",
  };
}

const NotFound = async () => {
  const headersList = await headers();
  const locale = headersList.get("x-next-i18n-router-locale");
  const { t } = await serverSideTranslation(locale, ["notFound"]);

  return (
    <div id="section-notFound">
      <div id="not-found">
     
          <Image
            src="/images/404.svg"
            alt="Animated 404 error page showing a cat playing with a ball of yarn"
            fill
          />
        <BtnBack title={t("btnBack")} />
      </div>
    </div>
  );
};

export default NotFound;
