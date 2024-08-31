"use client";
import { LogoutAccount } from "@/lib/actions/user.actions";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Footer = ({ user, type }: FooterProps) => {
  const router = useRouter();

  const HandleLogOut = async () => {
    try {
      const success = await LogoutAccount();
      if (success) {
        router.push("/sign-in");
      } else {
        console.error("Logout failed");
        // Optionally, show a notification or alert to the user
      }
    } catch (error) {
      console.error("Error during logout:", error);
      // Optionally, show a notification or alert to the user
    }
  };
  return (
    <footer className="mb-8 footer">
      <div className={type === "mobile" ? "footer_name_mobile" : "footer_name"}>
        {/* <p className="text-xl text-gray-700 font-old">{user.name}</p> */}
      </div>

      <div
        className={`${
          type === "mobile" ? "footer_email_mobile" : "footer_email"
        } mt-10`}
      >
        <h1 className="font-bold text-gray-800 truncate text-14">
          {user?.name}
        </h1>
        <p className="font-bold text-gray-600 truncate text-14">
          {user?.email}
        </p>
      </div>
      <div className="mt-8 ml-8 " onClick={HandleLogOut}>
        <Image
          src="/icons/logout2.png "
          alt="logout"
          width={34}
          height={34}
          className="rounded-full lg:p-1 md:mr-8  md:size-12  "
        />
        {/* <p className="font-bold border-2 border-purple-800 rounded-full  p-[5px] max-xl:hidden">LOGOUT</p> */}
      </div>
    </footer>
  );
};

export default Footer;
