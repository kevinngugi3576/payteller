"use client";
import React from "react";

import AnimatedCounter from "@/components/AnimatedCounter";
import DoughnutChart from "@/components/DoughnutChart";

const TotalBalance = ({
  accounts = [],
  totalBanks,
  totalCurrentBalance,
}: TotlaBalanceBoxProps) => {
  return (
    <section className="flex items-center w-full gap-4 p-4 border border-gray-200 rounded-xl shadow-chart sm:gap-6 sm:p-6">
      <div className="flex size-full max-w-[100px] items-center sm:max-w-[120px]"></div>
      <div className="flex flex-col gap-6">
        <DoughnutChart accounts={accounts} />
        <h2 className="font-semibold text-gray-900 text-18">
          Bank Account {totalBanks}
        </h2>
        <div className="flex flex-row gap-3">
          <p className="text-lg text-black font-large text-bold">
            Total current balance:{" "}
          </p>
          <div className="gap-2 text-lg font-bold   text-white bg-purple-800 rounded-full lg:text-2xl text-gray-90 flex-center  p-[6px]">
            <AnimatedCounter amount={totalCurrentBalance} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TotalBalance;
