"use client";

import { useAuth } from "@/context/authContext";
import {
  ArrowLeftStartOnRectangleIcon,
  HomeIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { SideBarNavs } from "./sideBarNavs";
import { ButtonIcon } from "@/components/buttonIcon/buttonIcon";
import "./sidebar.scss";

export const SideBar = ({onClose}) => {
  // const { logout } = useAuth();

  // const logoutHandler = async () => {
  //   await logout;
  // };

  return (
    <div className="section-sidebar pt-lg-3">
      <div className="section-top">
        <Link href="/">
          <HomeIcon className="icon" />
          <span> نکست بلاگ</span>
        </Link>
        <ButtonIcon onClick={onClose} className="d-block d-md-none border-0">
          <XMarkIcon />
        </ButtonIcon>
      </div>
      <div className="overflow-y-auto flex-fill">
        <SideBarNavs />
        <div
          // onClick={logoutHandler}
          className="section-bottom"
        >
          <ArrowLeftStartOnRectangleIcon className="icon" />
          <span>خروج</span>
        </div>
      </div>
    </div>
  );
};
