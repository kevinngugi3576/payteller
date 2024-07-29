import Link from "next/link";
import React from "react";
import Image from "next/image";
import BankCard from "./BankCard";

const RightSidebar = ({ user, banks }: RightSidebarProps) => {
  if (!user || !user.name) {
    return <div>Loading...</div>; // Handle loading or error state appropriately
  }

  return (
    <aside className="mt-1 right-sidebar">
      <section className="flex flex-col pb-8 ">
        <div className="profile-banner " />
        <div className="mt-12 profile-img">
          <span className="text-5xl font-bold text-blue-500 ">
            {user?.name[0]}
          </span>
        </div>
        <div className="mt-8 profile-details">
          <h1 className="ml-8 text-4xl font-bold">{user?.name} </h1>
          <p className="ml-8 profile-email">{user?.email}</p>
        </div>
      </section>
      <section className="banks">
        <div className="flex justify-between w-full ">
          <h2 className="header-2">My Banks</h2>
          <Link href="/my-banks" className="flex gap-2">
            <Image
              src="/icons/plus.svg"
              width={20}
              height={20}
              alt="add bank"
            />
            <h2 className="font-semibold text-14 gray-gray-600">Add Bank</h2>
          </Link>
        </div>
        {banks?.length && (
          <div className="relative flex flex-col items-center justify-center gap-5 ">
            <div className="relative z -10">
              <BankCard
                key={banks[0].$id}
                account={banks[0]}
                userName={`${user?.name}`}
                showBalance={false}
              />
            </div>
            {banks[1] && (
              <div className="absolute right-0 top-8 z-0 w-[90%]">
                <BankCard
                  key={banks[1].$id}
                  account={banks[1]}
                  userName={`${user?.name}`}
                  showBalance={false}
                />{" "}
              </div>
            )}
          </div>
        )}
      </section>
    </aside>
  );
};

export default RightSidebar;
