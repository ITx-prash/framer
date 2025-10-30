import { motion, useAnimate } from "motion/react";
import { button } from "motion/react-client";

const Animation_Sequence = () => {
  const [scope, animate] = useAnimate();

  //   ===========Preferred Approach===========
  //   we can define an array of array which will call each animation in sequence, if confused check the commented code below

  //   f*ck this animation sequence took me so long even not working properly with as like the alternate approach, itz fkng smh but i won't gu, will come back even stronger on this..peace out

  // FIXME:
  /*
  const animationSequence = [
    [".loader", { opacity: 1, width: "2rem" }, { duration: 0 }],
    [".loader", { rotate: 360 * 3 }, { duration: 2.5 }],

    [".loader", { opacity: 0, width: 0 }, { duration: 0.01 }],
    [".text", { display: "none" }, { duration: 0.3 }, { at: "-1" }],
    ["button", { width: "5rem" }, { duration: 0.4 }, { at: "-0.9" }],
    ["button", { borderRadius: "100px" }, { duration: 2 }, {at: "-5"}],
    [
      "button",
      {
        opacity: 1,
        scale: [1, 1.2, 0.8, 1],
        backgroundImage: "linear-gradient(to right, #11998e, #38ef7d)",
      },
      { duration: 0.8 },
    ],
    [".check-icon", { opacity: 1 }, { duration: 0.1 }],
    [
      ".check-icon path",
      { pathLength: 1 },
      { duration: 0.5, ease: "easeInOut" },
    ],
  ];

  const startAnimating = () => {
    animate(animationSequence);
  };
*/
  //   ===========Alternate Approach===========

    const startAnimating = async () => {
      // initial loader
      await animate(
        ".loader",
        {
          width: "2rem",
        },
        {
          duration: 0,
        },
      );
      // rotate loader
      await animate(
        ".loader",
        {
          rotate: 360 * 3,
        },
        {
          duration: 2.5,
        },
      );

      // hide loader
      animate(
        ".loader",
        {
          width: 0,
        },
        {
          duration: 0.1,
        },
      );

      animate(
        ".text",
        {
          display: "none",
        },
        { duration: 0.02 },
      );

      await animate(
        "button",
        { width: "5rem", borderRadius: "1000px" },
        {
          duration: 0.3,
        },
      );

      // since we are inside the async function, we can await the previous animation to finish and can also chain animations
      await animate(
        "button",

        {
          opacity: 1,
          scale: [1, 1.2, 0.8, 1],
          backgroundImage: "linear-gradient(to right, #11998e, #38ef7d)",
        },
        {
          duration: 0.8,
        },
      );
      animate(
        ".check-icon",
        {
          opacity: 1,
        },
        { duration: 0.1 },
      );

      animate(
        ".check-icon path",
        {
          pathLength: 1,
        },
        {
          duration: 0.5,
          ease: "easeInOut",
        },
      );
    };
  return (
    <div
      ref={scope}
      className="flex h-screen items-center justify-center bg-neutral-950"
    >
      <div className="flex h-20 w-80 items-center justify-center">
        <motion.button
          onClick={startAnimating}
          className="relative flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-linear-to-br from-[#11998e] to-[#38ef7d] text-3xl font-medium text-gray-100 shadow-lg"
        >
          {/* Loader svg */}
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="loader absolute left-1/24 h-7 w-7 text-white"
            style={{
              width: "0rem",
            }}
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 3a9 9 0 1 0 9 9" />
          </motion.svg>
          <span className="text" onClick={startAnimating}>
            Purchase Now!
          </span>

          {/* Checkmark svg */}
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="check-icon pointer-events-none absolute inset-0 m-auto h-12 w-12 text-white"
            initial={{
              opacity: 0,
            }}
          >
            <motion.path
              initial={{
                pathLength: 0,
              }}
              transition={{
                duration: 0.3,
                type: "tween",
                ease: "easeInOut",
              }}
              stroke="none"
              d="M0 0h24v24H0z"
              fill="none"
            />
            <motion.path
              initial={{
                pathLength: 0,
              }}
              d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"
            />
            <motion.path
              initial={{
                pathLength: 0,
              }}
              transition={{
                duration: 0.3,
                type: "tween",
                ease: "easeInOut",
              }}
              d="M9 12l2 2l4 -4"
            />
          </motion.svg>
        </motion.button>
      </div>
    </div>
  );
};

export default Animation_Sequence;
