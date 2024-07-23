"use client";
import React from "react";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import Link from "next/link";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Footer from "./Footer";

const MobileNavbar = ({ user }: MobileNavProps) => {
  const pathName = usePathname();

  return (
    <section className="w-fll max-w-[264px] ">
      <Sheet>
        <SheetTrigger>
          <Image
            src="/icons/hamburger.svg"
            alt="menu button"
            height={30}
            width={30}
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent side="left" className="bg-white border-none">
          <Link
            className="flex items-center gap-2 px-4 mb-12 cursor-pointer"
            href="/"
          >
            <Image
              src="/icons/logo.svg"
              width={34}
              height={34}
              alt="log app"
              className=""
            />
            <h1 className="font-bold text-black text-26 text">Payteller</h1>
          </Link>
          <div className="mobilenav-sheet">
            <SheetClose asChild>
              <nav className="flex flex-col h-full gap-6 pt-16 text-white ">
                {sidebarLinks.map((items) => {
                  const isActive =
                    pathName === items.route ||
                    pathName.startsWith(`${items.route}/`);
                  return (
                    <SheetClose asChild key={items.route}>
                      <Link
                        href={items.route}
                        key={items.label}
                        className={cn("mobilenav-sheet_close w-full ", {
                          "bg-bank-gradient": isActive,
                        })}
                      >
                        <div className="relative size-6">
                          <Image
                            src={items.imgURL}
                            alt={items.label}
                            width={20}
                            height={20}
                            className={cn({
                              "brightness-[3] invert-0": isActive,
                            })}
                          />
                        </div>
                        <p
                          className={cn(
                            "text-16 font-semi-bold text-black-2 ",
                            {
                              " text-white": isActive,
                            }
                          )}
                        >
                          {items.label}
                        </p>
                      </Link>
                    </SheetClose>
                  );
                })}{" "}
                user
              </nav>
            </SheetClose>
            <Footer user={user} type="mobile" />
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNavbar;
