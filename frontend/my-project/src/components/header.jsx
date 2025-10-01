"use client";

import { NavLink } from "./header/navLink";
import { useAuth } from "@/context/authContext";
// import { LanguageSelector } from "@/components/languageSelector/languageSelector";

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
    <header
      className={`z-10 shadow-md bg-inherit mb-10 sticky top-0 transition-all duration-200 border-b border-b-secondary-300 ${
        isLoading ? "blur-sm opacity-70" : "opacity-100 blur-0"
      }`}
    >
      {" "}
      <nav className="container xl:max-w-screen-xl">
        <ul className="flex items-center text-secondary-400 justify-between py-2">
          <div className="flex items-center gap-x-10">
            {/* <LanguageSelector /> */}

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
