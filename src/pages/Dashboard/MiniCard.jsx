import React from "react";

const MiniCard = () => {
  return (
    <>
      {/* need to remove that margin */}
      {/* container */}
      <div className="h-30 w-64 rounded-md px-6 py-5.5 shadow-[0.5px_1px_10px_0px_#00000024] bg-white">
        <div className="flex items-center justify-between">
          <div className="text-xs text-gray-500">Total Users</div>
          <div className="rounded-xs bg-blue-100 px-2 py-px text-[10px] font-semibold text-blue-800">
            +12%
          </div>
        </div>
        <div className="mt-1 text-2xl font-bold">2,543</div>
        <div className="mt-1 text-xs text-gray-500">
          Increased by 343 since last month
        </div>
      </div>
    </>
  );
};

export default MiniCard;
