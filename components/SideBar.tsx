"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
// import Footer from "./Footer";

const SideBar = ({ user }: SiderbarProps) => {
  const pathName = usePathname();
  return (
    <section className="sidebar">
      <nav className="flex-col gap-4 fle">
        <Link className="mb-12 flex cursor-pointer items-center gap=2" href="/">
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="log app"
            className="size-[24px] max-xl:size-14"
          />
          <h1 className="sidebar-logo">Payteller</h1>
        </Link>
        {sidebarLinks.map((items) => {
          const isActive =
            pathName === items.route || pathName.startsWith(`{{items.route}}`);
          return (
            <Link
              href={items.route}
              key={items.label}
              className={cn("sidebar-link", { "bg-bank-gradient": isActive })}
            >
              <div className="relative size-6">
                <Image
                  src={items.imgURL}
                  alt={items.label}
                  fill
                  className={cn({ "brightness-[3] invert-0": isActive })}
                />
              </div>
              <p className={cn("sidebar-label",{"!text-white" : isActive})}>
                {items.label}
              </p>
            </Link>
          );
        })}
      </nav>
      {/* <Footer user={user} /> */}
    </section>
  );
};

export default SideBar;
