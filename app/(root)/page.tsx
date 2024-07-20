import TotalBalanceBox from "@/components/TotalBalanceBox";
import HeaderBox from "@/components/HeaderBox";
import React from "react";
import RigthSidebar from "@/components/RigthSidebar";

const Home = () => {
  const loggedIn = {
    firstName: "Kevin",
    lastName: "ngugi",
    email: "kevinngugi197@gmail.com",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="welcome"
            user={loggedIn?.firstName || "guest"}
            subtext="Access and manage your account efficiently"
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={100.0}
          />
        </header>
        Recent transactions
      </div>
      <RigthSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 45 }, { currentBalance: 50 }]}
      />
    </section>
  );
};

export default Home;
