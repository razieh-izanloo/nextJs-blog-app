"use client";
import Link from "next/link";
import { useAuth } from "@/context/authContext";
import { Avatar } from "@/components/avatar";
import { ButtonIcon } from "@/components/buttonIcon/buttonIcon";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { SideBar } from "./sideBar";
import Drawer from "@/components/drawer/drawer";
import "./header.scss";

export const Header = ({}) => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const { user, isLoading } = useAuth();

  return (
    <header className={`${isLoading ? "isLoading-header" : ""}`}>
      <div className="header-dashboard-layout py-4 px-3  px-lg-4">
        <div className="d-flex align-items-center gap-2">
          <ButtonIcon
            className="d-block d-md-none border-0"
            variant="outline"
            onClick={() => setIsOpenDrawer(!isOpenDrawer)}
          >
            {isOpenDrawer ? <XMarkIcon /> : <Bars3Icon />}
          </ButtonIcon>
          <span className="user-name">سلام؛ {user?.name}</span>
        </div>
        <Link href="/profile">
          <Avatar src={user?.avatarUrl} />
        </Link>
        <Drawer open={isOpenDrawer} onClose={() => setIsOpenDrawer(false)}>
          <SideBar onClose={() => setIsOpenDrawer(false)} />
        </Drawer>
      </div>
    </header>
  );
};
