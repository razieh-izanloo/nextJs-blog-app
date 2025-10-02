"use client";

import { useAuth } from "@/context/authContext";
import {
  ArrowLeftStartOnRectangleIcon,
  HomeIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { SideBarNavs } from "./sideBarNavs";
import { ButtonIcon } from "@/components/buttonIcon";
import "./sidebar.css";

export const SideBar = ({ onClose }) => {
  // const { logout } = useAuth();

  // const logoutHandler = async () => {
  //   await logout;
  // };

  return (
    <div className="section-sidebar pt-lg-3">
      <div className="section-top">
        <Link href="/">
          <HomeIcon className="w-6 h-6" />
          <span> نکست بلاگ</span>
        </Link>
        <ButtonIcon onClick={onClose} className="block md:hidden">
          <XMarkIcon />
        </ButtonIcon>
      </div>
      <div className="flex-fill">
        <SideBarNavs />
        <div
          // onClick={logoutHandler}
          className="section-bottom"
        >
          <ArrowLeftStartOnRectangleIcon className="ml-2 h-5 w-5" />
          <span>خروج</span>
        </div>
      </div>
    </div>
  );
};
