import { useEffect, useState } from "react";

export const useGetCurrentLang = () => {
  const [currentLang, setCurrentLang] = useState("fa");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const name = "NEXT_LOCALE";
      const regex = new RegExp(`(^| )${name}=([^;]+)`);
      const match = document.cookie.match(regex);
      setCurrentLang(match ? match[2] : "fa");
    }
  }, []);

  return currentLang;
};
