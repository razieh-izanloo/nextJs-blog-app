"use client";

import { NavLink } from "./navLink";
import { useAuth } from "@/context/authContext";
import { LanguageSelector } from "@/components/languageSelector/languageSelector";
import "./index.scss";

export const Header = () => {
  const { user, isLoading } = useAuth();

  const navLinks = [
    {
      id: 1,
      label: "خانه",
      path: "/",
    },
    {
      id: 2,
      label: "بلاگ ها",
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
                  <NavLink path={navLink.path}>{navLink.label}</NavLink>
                </li>
              );
            })}
            <li>
              {user ? (
                <NavLink path="/profile">پروفایل</NavLink>
              ) : (
                <NavLink path="/signin">ورود</NavLink>
              )}
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};
