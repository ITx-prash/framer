import { motion } from "motion/react";
const Button = () => {
  return (
    <div
      className="flex h-screen w-full flex-wrap items-start gap-x-5 bg-neutral-950 p-5"
      style={{
        backgroundImage:
          "radial-gradient(circle at 1px 1px, #242424 1px, transparent 0)",
        backgroundSize: "28px 28px",
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
        className="group relative rounded-xl bg-black px-12 py-4 font-bold text-gray-500"
      >
        PRASHANT
        <span className="from-transparent-0 to-transparent-0 absolute inset-x-0 bottom-px mx-auto h-px w-3/4 bg-linear-to-r via-cyan-500" />
        <span className="from-transparent-0 to-transparent-0 absolute inset-x-0 bottom-0 mx-auto h-1 w-full bg-linear-to-r via-cyan-500 opacity-0 blur-xs group-hover:opacity-100" />
      </motion.button>
    </div>
  );
};

export default Button;
