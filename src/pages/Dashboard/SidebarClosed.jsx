import { AnimatePresence, motion } from "framer-motion";
import {
  IconHome,
  IconChevronRight,
  IconUsers,
  IconSettings2,
  IconChartBarPopular,
} from "@tabler/icons-react";

const closedSidebarVariants = {
  initial: {
    width: 175,
    opacity: 0,
  },
  animate: {
    width: 68,
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
  exit: {
    width: 68,

    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};

const SidebarClosed = ({ isopen, setIsopen }) => {
  const iconVariants = {
    initial: {
      opacity: 0,
      scale: 0.5,
      y: -10,
    },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <AnimatePresence mode="wait">
      {!isopen && (
        <motion.div
          variants={closedSidebarVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="flex h-screen w-12 flex-col items-center gap-8 overflow-hidden pt-5 shadow-[0.1px_1px_4px_0px_#00000024] md:w-17"
        >
          <div
            className="flex size-8 items-center justify-center rounded-full shadow-[0px_3px_5px_0px_#00000024] transition-colors hover:bg-gray-100 md:size-10"
            onClick={() => {
              setIsopen(true);
            }}
          >
            <IconChevronRight
              className="size-[25px] cursor-pointer text-gray-800 md:size-7"
              strokeWidth={1.7}
            />
          </div>
          <motion.div 
          // variants={iconVariants}
          
          className="flex flex-col gap-6 px-1">
            <IconHome className="size-5 cursor-pointer rounded-lg p-1 text-gray-600 hover:bg-gray-200 md:size-8" />
            <IconChartBarPopular className="size-5 cursor-pointer rounded-lg p-1 text-gray-600 hover:bg-gray-200 md:size-8" />
            <IconUsers className="size-5 cursor-pointer rounded-lg p-1 text-gray-600 hover:bg-gray-200 md:size-8" />
            <IconSettings2 className="size-5 cursor-pointer rounded-lg p-1 text-gray-600 hover:bg-gray-200 md:size-8" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SidebarClosed;
