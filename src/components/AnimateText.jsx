import { useEffect } from "react";
import { useAnimate, motion, stagger } from "motion/react";

const text =
  "Your future isn’t built in moments of inspiration — it’s built quietly on the days you don’t feel like showing up but do anyway. Every choice of consistency over comfort and focus over distraction builds the version of you that doesn’t just dream but delivers. The world rewards persistence, not potential.";

const AnimateText = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    startAnimating();
  }, []);
  const startAnimating = () => {
    animate(
      "span",
      {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
      },
      {
        duration: 0.6,
        ease: "easeInOut",
        delay: stagger(0.05),
      },
    );
  };

  return (
    <div
      ref={scope}
      className="flex h-screen items-center justify-center bg-black text-3xl text-white"
    >


      <div className="flex max-w-3xl flex-wrap">
        {text.split(" ").map((word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
            className="mr-2 leading-10 font-medium"
          >
            {word}
          </motion.span>
        ))}

        {/* <span>hi</span> */}
      </div>
    </div>
  );
};

export default AnimateText;
