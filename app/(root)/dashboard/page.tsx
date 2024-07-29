import TotalBalanceBox from "@/components/TotalBalanceBox";
import HeaderBox from "@/components/HeaderBox";
import React from "react";
import RightSidebar from "@/components/RightSidebar";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import TransactionsTable from "@/components/TransactionsTable";
import { transactions } from "@/constants";

const Home = async () => {
  const loggedIn = await getLoggedInUser();
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="WELCOME"
            user={loggedIn?.name.toUpperCase()}
            subtext="Access and manage your account efficiently"
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={655544.0}
          />
        </header>
        <div className="">
          Recent transactions
          <TransactionsTable transactions={transactions} />
        </div>
      </div>

      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 350000 }, { currentBalance: 434000 }]}
      />
    </section>
  );
};

export default Home;
