import TotalBalanceBox from "@/components/TotalBalanceBox";
import HeaderBox from "@/components/HeaderBox";
import React from "react";
import RigthSidebar from "@/components/RightSidebar";
import { getLoggedInUser } from "@/lib/actions/user.actions";

const Home = async() => {
  const loggedIn = getLoggedInUser()
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="welcome"
            user={loggedIn?.name || "guest"}
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
