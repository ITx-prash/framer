import { useState } from "react";
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
        <div>
          {isopen ? (
            <SidebarOpen isopen={isopen} setIsopen={setIsopen} />
          ) : (
            <SidebarClosed isopen={isopen} setIsopen={setIsopen} />
          )}
        </div>
      
        <div className="flex-1 ">
          <Header />
          <div className="bg-gray-100 h-full  p-6 flex flex-col gap-6">
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
