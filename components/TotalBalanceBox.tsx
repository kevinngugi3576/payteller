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
    <section className="flex w-full items-center gap-4 rounded-xl border border-gray-200 p-4 shadow-chart sm:gap-6 sm:p-6">
      <div className="flex size-full max-w-[100px] items-center sm:max-w-[120px]"></div>
      <div className="flex flex-col gap-6">
        <DoughnutChart accounts={accounts} />
        <h2 className="text-18 font-semibold text-gray-900">
          Bank Account {totalBanks}
        </h2>
        <div className="flex flex-row gap-3">
          <p className="text-lg font-large text-black text-bold">
            total current balance:{" "}
          </p>
          <div className="text-sm lg:text-xl  font-semibold text-gray-90 flex-center gap-2">
            <AnimatedCounter amount={totalCurrentBalance} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TotalBalance;
