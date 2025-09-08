"use client";
import { infoLang } from "@/lib/i18n/infoLang";
// import { useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import "./languageSelector.scss";
import { useGetCurrentLang } from "@/hooks/useGetCurrentLang";

export const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("fa");
  const pathname = usePathname();

  const updateUrl = (lang) => {
    const segments = pathname.split("/");
    segments[segments[1] === currentLang ? 1 : 0] = lang;
    return segments.join("/");
  };

  const selectLanguage = (lang) => {
    setIsOpen(false);
    setCurrentLang(lang)
  };

  const initialCurrentLang = useGetCurrentLang();
  useEffect(() => {
    if (initialCurrentLang !== currentLang) setCurrentLang(initialCurrentLang);
  }, [initialCurrentLang]);


  return (
    <div className="position-relative inline-block section-languageSelector">
      <button onClick={() => setIsOpen(!isOpen)}>
        <Image
          src={`/images/flags/${currentLang}.svg`}
          alt={""}
          width={24}
          height={24}
        />
        <span className="current-lang">{infoLang[currentLang].label}</span>
        <Image
          src="/images/icons/arrow.svg"
          alt="change language"
          width={10}
          height={10}
          className="icon-arrow"
        />
      </button>

      {isOpen && (
        <div className="isOpen">
          {["fa", "en"].map((lang) => (
            <Link
              href={updateUrl(lang)}
              key={lang}
              onClick={() => selectLanguage(lang)}
              className={`link-lang
                 ${lang === currentLang ? "current-link" : ""}`}
            >
              <Image
                src={`/images/flags/${lang}.svg`}
                alt={""}
                width={24}
                height={24}
              />

              {infoLang[lang].label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
