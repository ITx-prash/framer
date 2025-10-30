import { useState } from "react";
import { AnimatePresence } from "motion/react";
import Header from "./Header";
import MiddleCard from "./MiddleCard";
import MiniCard from "./MiniCard";
import SidebarClosed from "./SidebarClosed";
import SidebarOpen from "./SidebarOpen";

const Dashboard = () => {
  const [isopen, setIsopen] = useState(false);
  return (
    <>
      <div className="flex">
        <AnimatePresence mode="wait">
          {isopen ? (
            <SidebarOpen key="open" isopen={isopen} setIsopen={setIsopen} />
          ) : (
            <SidebarClosed key="closed" isopen={isopen} setIsopen={setIsopen} />
          )}
        </AnimatePresence>

        <div className="flex-1">
          <Header />
          <div className="flex h-full flex-col gap-6 bg-gray-100 p-6">
            <div className="flex flex-wrap gap-6">
              <MiniCard />
              <MiniCard />
              <MiniCard />
              <MiniCard />
            </div>
            <div className="flex gap-6">
              <MiddleCard />
              <MiddleCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
