import {
  IconRocket,
  IconBrush,
  IconCamera,
  IconPalette,
  IconRobot,
} from "@tabler/icons-react";
import Card from "./Card";

import {
  useScroll,
  motion,
  useSpring,
  useMotionValueEvent,
} from "motion/react";
import { useState } from "react";
const Home = () => {
  const backgrounds = [
    "#9333EA",
    "#A72703",
    "#22C55E",
    "#F97316",
    "#EC4899",
    "#6B7280",
  ];
  const [background, setBackground] = useState(backgrounds[0]);
  const features = [
    {
      icon: <IconRocket className="h-8 w-8 text-neutral-200" />,
      title: "Generate ultra realistic imgs in seconds",
      description:
        "With our state of the art AI, you can generate ultra realistic imgs in no time at all.",
      content: (
        <div>
          <img
            src="https://assets.aceternity.com/pro/car-1.jpg"
            alt="car"
            height="500"
            width="500"
            className="rounded-lg"
          />
        </div>
      ),
    },
    {
      icon: <IconBrush className="h-8 w-8 text-neutral-200" />,
      title: "Replicate great art instantly",
      description:
        "Our AI models can study and reproduce artistic styles with unmatched accuracy and depth.",
      content: (
        <div>
          <img
            src="https://assets.aceternity.com/pro/art.jpeg"
            alt="art"
            height="500"
            width="500"
            className="rounded-lg"
          />
        </div>
      ),
    },
    {
      icon: <IconCamera className="h-8 w-8 text-neutral-200" />,
      title: "Enhance low quality photos",
      description:
        "Bring blurry or pixelated imgs back to life using intelligent upscaling and detail restoration.",
      content: (
        <div>
          <img
            src="https://assets.aceternity.com/pro/car-1.jpg"
            alt="enhance"
            height="500"
            width="500"
            className="rounded-lg"
          />
        </div>
      ),
    },
    {
      icon: <IconCamera className="h-8 w-8 text-neutral-200" />,
      title: "Enhance low quality photos",
      description:
        "Bring blurry or pixelated imgs back to life using intelligent upscaling and detail restoration.",
      content: (
        <div>
          <img
            src="https://assets.aceternity.com/pro/car-1.jpg"
            alt="enhance"
            height="500"
            width="500"
            className="rounded-lg"
          />
        </div>
      ),
    },
    {
      icon: <IconCamera className="h-8 w-8 text-neutral-200" />,
      title: "Enhance low quality photos",
      description:
        "Bring blurry or pixelated imgs back to life using intelligent upscaling and detail restoration.",
      content: (
        <div>
          <img
            src="https://assets.aceternity.com/pro/car-1.jpg"
            alt="enhance"
            height="500"
            width="500"
            className="rounded-lg"
          />
        </div>
      ),
    },
  ];

  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsCount = features.length;
    const index = Math.min(
      Math.floor(latest * cardsCount),
      backgrounds.length - 1,
    );
    setBackground(backgrounds[index]);
  });

  return (
    <motion.div
      animate={{
        background,
      }}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
      className="flex min-h-screen w-full items-center justify-center"
    >
      {/* progress Bar */}
      <motion.div
        style={{
          scaleX: useSpring(scrollYProgress),
          position: "fixed",
          height: 4,
          top: 0,
          left: 0,
          right: 0,
          originX: 0,
        }}
        className="bg-red-500"
      />

      <div className="mx-auto flex flex-col items-center justify-center gap-10 space-y-60 p-50 pl-80">
        {features.map((feature, idx) => (
          <Card key={idx} feature={feature} />
        ))}
      </div>
    </motion.div>
  );
};

export default Home;
