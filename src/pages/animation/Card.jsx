import { useRef } from "react";
import {
  useScroll,
  motion,
  useTransform,
  useMotionTemplate,
  useSpring,
} from "motion/react";

const Card = ({ feature }) => {
  const cardRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const translateContent = useSpring(
    useTransform(scrollYProgress, [0, 1], [100, -300]),
    {
      stiffness: 100,
      damping: 30,
      mass: 1,
    },
  );

  const opacityContent = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.1, 1, 0],
  );

  // Blur when scrolling up (reaching top) - from 70% to 100% of scroll
  const blurTop = useTransform(scrollYProgress, [0.7, 1], [0, 10]);

  // Blur when scrolling down (entering from bottom) - from 0% to 30% of scroll
  const blurBottom = useTransform(scrollYProgress, [0, 0.3], [10, 0]);

  // Combine both blur effects: max of both values
  const blur = useTransform([blurTop, blurBottom], ([top, bottom]) =>
    Math.max(top, bottom),
  );

  // Scale effect: scale down at top and bottom
  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.8, 1, 1, 0.8],
  );

  return (
    <div ref={cardRef} 
    className="grid grid-cols-2 items-center gap-1">
      <motion.div
        style={{
          filter: useMotionTemplate`blur(${blur}px)`,
          scale,
        }}
      >
        {feature.icon}
        <h2 className="text-4xl font-bold text-white">{feature.description}</h2>
        <p className="text-lg text-gray-400"> {feature.description}</p>
      </motion.div>
      <motion.div
        style={{
          y: translateContent,
          opacity: opacityContent,
        }}
      >
        {feature.content}
      </motion.div>
    </div>
  );
};

export default Card;
