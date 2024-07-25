"use client";
import { LogoutAccount } from "@/lib/actions/user.actions";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Footer = ({ user, type = "desktop" }: FooterProps) => {
  const router = useRouter();

  const HandleLogOut = async () => {
    const loggedOut = await LogoutAccount();
    if (loggedOut) {
      router.push("/sign-in");
    }
  };
  return (
    <footer className="footer">
      <div className={type === "mobile" ? "footer_name_mobile" : "footer_name"}>
        <p className="text-xl text-gray-700 font-old">{user.name}</p>
      </div>

      <div
        className={type === "mobile" ? "footer_email_mobile" : "footer_email"}
      >
        <h1 className="font-bold text-gray-800 truncate text-14">
          {user.name}
        </h1>
        <p className="font-bold text-gray-600 truncate text-14">{user.email}</p>
      </div>
      <div className="footer_image" onClick={HandleLogOut}>
        <Image src="/icons/logout.svg " alt="jsm" fill />
      </div>
    </footer>
  );
};

export default Footer;
