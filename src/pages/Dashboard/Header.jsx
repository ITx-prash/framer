import { IconBell } from "@tabler/icons-react";
import React from "react";

const Header = () => {
  return (
    <>
      {/* container */}
      <div className="flex items-center justify-between px-6 py-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
        <div className="text-lg font-semibold text-gray-800">Overview</div>
        <div className="flex items-center justify-center gap-4">
          <IconBell className="text-gray-600" />
          <div className="size-9 rounded-full bg-neutral-300"></div>
        </div>
      </div>
    </>
  );
};

export default Header;
