import { useState } from "react";
import {
  Icon24Hours,
  Icon360View,
  Icon3dCubeSphere,
  IconPlus,
  IconX,
  IconMessage,
} from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
const Card = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.98,
              filter: "blur(10px)",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)" ,
            }}
            exit={{
              opacity: 0,
              scale: 0.98,
              filter: "blur(10px)",
            }}
            className="h-screen  flex items-center w-full justify-center"
          >
            <div className="w-72 min-h-112 h-112  rounded-xl shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] p-6 flex flex-col ">
              <h2 className="font-bold text-[11px]">
                Aceternity UI Components
              </h2>
              <p className="text-neutral-600 mt-2 text-[11px]">
                A collection of beautiful UI components, let's get on with it.
              </p>
              <div className="flex items-center justify-center mt-4">
                <button
                  className="flex items-center justify-center gap-1 text-[11px] shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] rounded-md px-2 py-1 cursor-pointer"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <img src="/logo.png" alt="logo" width={15} height={15} />{" "}
                  Aceternity
                  <IconX size={15} className="text-neutral-400 " />
                </button>
              </div>

              <div className="bg-gray-100 flex-1 mt-4 rounded-lg relative">
                {/* Motion divs here */}
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.98,
                    filter: "blur(10px)",
                  }}
                  whileHover={{
                    opacity: 1,
                    scale: 1.05,
                    filter: "blur(0px)",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 20,
                  }}
                  className="absolute inset-0 rounded-lg bg-white shadow-[0_1px_7px_rgb(0,0,0,0.1)] divide-y divide-neutral-200"
                >
                  <div className="flex gap-2 p-4">
                    <div
                      className="h-7 w-7 shrink-0 bg-linear-to-br 
           shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]
           bg-white rounded-md flex items-center justify-center"
                    >
                      <IconMessage className="h-4 w-4 text-neutral-600" />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-[8px] font-bold text-neutral-600">
                        Aceternity UI Components
                      </p>
                      <p className="text-neutral-400 text-[8px] mt-1">
                        A collection of UI components
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2 p-4">
                    <div
                      className="h-7 w-7 shrink-0 bg-linear-to-br 
           shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]
           bg-white rounded-md flex items-center justify-center"
                    >
                      <Icon24Hours className="h-4 w-4 text-neutral-600" />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-[8px] font-bold text-neutral-600">
                        24 hours turnaround
                      </p>
                      <p className="text-neutral-400 text-[8px] mt-1">
                        Super fast delivery at warp speed.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2 p-4">
                    <div
                      className="h-7 w-7 shrink-0 bg-linear-to-br 
           shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]
           bg-white rounded-md flex items-center justify-center"
                    >
                      <Icon360View className="h-4 w-4 text-neutral-600" />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-[8px] font-bold text-neutral-600">
                        360 days all around support
                      </p>
                      <p className="text-neutral-400 text-[8px] mt-1">
                        Get help from our support team all year round.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2 p-4">
                    <div
                      className="h-7 w-7 shrink-0 bg-linear-to-br 
           shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]
           bg-white rounded-md flex items-center justify-center"
                    >
                      <Icon3dCubeSphere className="h-4 w-4 text-neutral-600" />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-[8px] font-bold text-neutral-600">
                        Some other cool feature
                      </p>
                      <p className="text-neutral-400 text-[8px] mt-1">
                        Lorem looks bad for some reason
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2 p-4 items-center justify-center ">
                    <div
                      className="h-4 w-4 shrink-0 bg-linear-to-br 
           shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]
           bg-white rounded-md flex items-center justify-center "
                    >
                      <IconPlus className="h-3 w-3 text-neutral-600" />
                    </div>

                    <p className="text-neutral text-[8px]  h-full text-center flex-">
                      Create Project
                    </p>
                  </div>
                </motion.div>
              </div>
              {/* Motion divs end here */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Card;
