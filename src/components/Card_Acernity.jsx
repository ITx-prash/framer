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
const CardC = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      {/* for using the exit animation we have to wrap the conditional rendering with AnimatePresence */}
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
              filter: "blur(0px)",
            }}
            exit={{
              opacity: 0,
              scale: 0.98,
              filter: "blur(10px)",
            }}
            className="flex h-screen w-full items-center justify-center"
          >
            <div className="flex h-112 min-h-112 w-72 flex-col rounded-xl p-6 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
              <h2 className="text-[11px] font-bold">
                Aceternity UI Components
              </h2>
              <p className="mt-2 text-[11px] text-neutral-600">
                A collection of beautiful UI components, let's get on with it.
              </p>
              <div className="mt-4 flex items-center justify-center">
                <button
                  className="flex cursor-pointer items-center justify-center gap-1 rounded-md px-2 py-1 text-[11px] shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <img src="/logo.png" alt="logo" width={15} height={15} />{" "}
                  Aceternity
                  <IconX size={15} className="text-neutral-400" />
                </button>
              </div>

              <div className="relative mt-4 flex-1 rounded-lg bg-gray-100">
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
                  className="absolute inset-0 divide-y divide-neutral-200 rounded-lg bg-white shadow-[0_1px_7px_rgb(0,0,0,0.1)]"
                >
                  <div className="flex gap-2 p-4">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-white bg-linear-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
                      <IconMessage className="h-4 w-4 text-neutral-600" />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-[8px] font-bold text-neutral-600">
                        Aceternity UI Components
                      </p>
                      <p className="mt-1 text-[8px] text-neutral-400">
                        A collection of UI components
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2 p-4">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-white bg-linear-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
                      <Icon24Hours className="h-4 w-4 text-neutral-600" />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-[8px] font-bold text-neutral-600">
                        24 hours turnaround
                      </p>
                      <p className="mt-1 text-[8px] text-neutral-400">
                        Super fast delivery at warp speed.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2 p-4">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-white bg-linear-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
                      <Icon360View className="h-4 w-4 text-neutral-600" />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-[8px] font-bold text-neutral-600">
                        360 days all around support
                      </p>
                      <p className="mt-1 text-[8px] text-neutral-400">
                        Get help from our support team all year round.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2 p-4">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-white bg-linear-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
                      <Icon3dCubeSphere className="h-4 w-4 text-neutral-600" />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-[8px] font-bold text-neutral-600">
                        Some other cool feature
                      </p>
                      <p className="mt-1 text-[8px] text-neutral-400">
                        Lorem looks bad for some reason
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-2 p-4">
                    <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-md bg-white bg-linear-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
                      <IconPlus className="h-3 w-3 text-neutral-600" />
                    </div>

                    <p className="text-neutral flex- h-full text-center text-[8px]">
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

export default CardC;
