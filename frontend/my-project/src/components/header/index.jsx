"use client";

import Skeleton from "react-loading-skeleton";
import { NavLink } from "./navLink";
// import { useAuth } from "@/context/AuthContext";
import { LanguageSelector } from "@/components/languageSelector/languageSelector";
import { useClientSideTranslation } from "@/lib/i18n/useClientSideTranslation";
import { useGetCurrentLang } from "@/hooks/useGetCurrentLang";
import "./index.scss";

export const Header = () => {
  //   const { user, isLoading } = useAuth();
  const  locale  = useGetCurrentLang();
  let user = false;
  const isLoading = false;
  const { t } = useClientSideTranslation(locale, ["header"]);

  const navLinks = [
    {
      id: 1,
      label: "home",
      path: "/",
    },
    {
      id: 2,
      label: "blogs",
      path: "/blogs",
    },
  ];

  return (
    <header className={isLoading ? "isLoading" : ""}>
      <nav className="w-100">
        <ul className="d-flex align-items-center justify-content-between p-3">
          <LanguageSelector />
          <div className="d-flex align-items-center gap-3">
            {navLinks.map((navLink) => {
              return (
                <li key={navLink.id}>
                  <NavLink path={navLink.path}>
                    {t ? t(navLink.label) : <Skeleton width="20px" />}
                  </NavLink>
                </li>
              );
            })}
            <li>
              {user ? (
                <NavLink path="/profile">
                  {t ? t("profile") : <Skeleton width="20px" />}
                </NavLink>
              ) : (
                <NavLink path="/signin">
                  {t ? t("signin") : <Skeleton width="20px" />}
                </NavLink>
              )}
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};
