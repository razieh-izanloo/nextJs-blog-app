"use client";
import Link from "next/link";
import { useAuth } from "@/context/authContext";
import { Avatar } from "@/components/avatar";
import { ButtonIcon } from "@/components/buttonIcon";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { SideBar } from "./sideBar";
import Drawer from "@/components/drawer";

export const Header = ({}) => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const { user, isLoading } = useAuth();
console.log(user)
  return (
    <header
      className={`bg-secondary-0 ${isLoading ? "bg-opacity-30 blur-md" : ""}`}
    >
      <div className="flex items-center justify-between bg-secondary-0 py-4 px-3  px-lg-4 md:mr-[250px]">
        <div className="flex items-center gap-2">
          <ButtonIcon
            className="block md:hidden"
            variant="outline"
            onClick={() => setIsOpenDrawer(!isOpenDrawer)}
          >
            {isOpenDrawer ? <XMarkIcon /> : <Bars3Icon />}
          </ButtonIcon>
          <span className="text-sm lg:text-lg font-bold text-secondary-700">
            سلام؛ {user?.name}
          </span>
        </div>
        <Link href="/profile">
          <Avatar src={user?.avatarUrl ?? "/images/defaultAvatar.png"} />
        </Link>
        <Drawer open={isOpenDrawer} onClose={() => setIsOpenDrawer(false)}>
          <SideBar onClose={() => setIsOpenDrawer(false)} />
        </Drawer>
      </div>
    </header>
  );
};
