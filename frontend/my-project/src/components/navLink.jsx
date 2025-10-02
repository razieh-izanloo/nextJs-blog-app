"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavLink = ({ path, children }) => {
  const pathname = usePathname();

  return (
    <Link
      className={`block py-2 hover:text-secondary-900 transition-all ease-out
        ${pathname === path ? "text-primary-900" : ""}
      `}
      href={path}
    >
      {children}
    </Link>
  );
};
