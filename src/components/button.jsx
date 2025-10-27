import { motion } from "motion/react";
const button = () => {
  return (
    <div
      className="bg-neutral-950 flex-wrap h-screen w-full p-5 gap-x-5  flex items-start"
      style={{
        backgroundImage:
          "radial-gradient(circle at 1px 1px, #242424 2px, transparent 0)",
        backgroundSize: "18px 18px",
        backgroundRepeat: "repeat",
      }}
    >
      <motion.button
        initial={{
          rotate: 0,
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        whileHover={{
          rotateX: 25,
          rotateY: 10,
          y: -5,
          scale: 1.05,
          boxShadow: "0 10px 14px rgba(8,122,184,0.7)",

          transition: {
            duration: 0.3,
          },
        }}
        whileTap={{
          y: 5,
          boxShadow: "0 5px 4px rgba(8,122,184,0.7)",
          transition: {
            duration: 0.2,
          },
        }}
        className="group relative font-bold bg-black px-12 py-4 rounded-xl text-gray-500 "
      >
        PRASHANT
        <span className=" bg-linear-to-r from-transparent-0 via-cyan-500 to-transparent-0 h-px w-3/4 bottom-px  absolute inset-x-0 mx-auto " />
        <span className="group-hover:opacity-100  blur-xs h-1 bg-linear-to-r from-transparent-0 via-cyan-500 to-transparent-0 w-full bottom-0 opacity-0  absolute inset-x-0 mx-auto " />
      </motion.button>
    </div>
  );
};

export default button;
