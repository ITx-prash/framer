import {
  IconHome,
  IconChevronLeft,
  IconUsers,
  IconSettings2,
  IconChartBarPopular,
} from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";

const openSidebarVariants = {
  initial: {
    width: 68,
  },
  animate: {
    width: 175,

    transition: {
      duration: 0.3,
      ease: "easeInOut",
      staggerChildren: 0.07,
      delayChildren: 0.07,
    },
  },
  exit: {
    width: 68,

    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const childVarients = {
  initial: {
    opacity: 0,
    y: -10,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.15,
    },
  },
};

const textVariations = {
  initial: {
    opacity: 0,
    width: 0,
  },
  animate: {
    opacity: 1,
    width: "auto",
    transition: {
      duration: 0.25,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    width: 0,
    transition: {
      duration: 0.15,
    },
  },
};

const SidebarOpen = ({ isopen, setIsopen }) => {
  return (
    <AnimatePresence mode="wait">
      {isopen && (
        // parent div for sidebar
        <motion.div
          variants={openSidebarVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="flex h-screen overflow-hidden px-6 py-5 shadow-[0.1px_1px_4px_0px_#00000024]"
        >
          <div className="flex h-55 w-full flex-col justify-between">
            <motion.div
              variants={childVarients}
              className="flex items-center justify-between gap-2"
            >
              <motion.h2
                variants={textVariations}
                className="text-xl font-bold whitespace-nowrap text-gray-800"
              >
                Dashboard
              </motion.h2>

              <div
                className="flex shrink-0 cursor-pointer items-center justify-center rounded-full shadow-[0px_3px_5px_0px_#00000024] transition-colors hover:bg-gray-100"
                onClick={() => {
                  setIsopen(false);
                }}
              >
                <motion.div
                  initial={{
                    rotate: 0,
                    scale: 0.8,
                  }}
                  animate={{
                    scale: 1,
                    rotate: 360,

                    transition: { duration: 0.4, ease: "easeInOut" },
                  }}
                >
                  <IconChevronLeft
                    className="size-6 cursor-pointer text-gray-800 md:size-7"
                    strokeWidth={1.3}
                  />
                </motion.div>
              </div>
            </motion.div>
            {/* Lower Menu Items */}

            <motion.div className="flex flex-col gap-4 px-4 md:px-2">
              <motion.div
                variants={childVarients}
                className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-1 text-gray-500 hover:bg-gray-200"
              >
                <IconHome className="size-5 shrink-0 cursor-pointer text-gray-600 md:size-6" />
                <motion.h4
                  variants={textVariations}
                  className="text-md text-neutral-600"
                >
                  Home
                </motion.h4>
              </motion.div>

              <motion.div
                variants={childVarients}
                className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-1 text-gray-500 hover:bg-gray-200"
              >
                <IconChartBarPopular className="size-5 shrink-0 cursor-pointer text-gray-600 md:size-6" />
                <motion.h4
                  variants={textVariations}
                  className="text-md text-neutral-600"
                >
                  Analytics
                </motion.h4>
              </motion.div>
              <motion.div
                variants={childVarients}
                className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-1 text-gray-500 hover:bg-gray-200"
              >
                <IconUsers className="size-5 shrink-0 cursor-pointer text-gray-600 md:size-6" />
                <motion.h4
                  variants={textVariations}
                  className="text-md text-neutral-600"
                >
                  Users
                </motion.h4>
              </motion.div>
              <motion.div
                variants={childVarients}
                className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-1 text-gray-500 hover:bg-gray-200"
              >
                <IconSettings2 className="size-5 shrink-0 cursor-pointer text-gray-600 md:size-6" />
                <motion.h4
                  variants={textVariations}
                  className="text-md text-neutral-600"
                >
                  Settings
                </motion.h4>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SidebarOpen;
