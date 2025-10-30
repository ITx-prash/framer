import { useState } from "react";
import { IconBrandGithub } from "@tabler/icons-react";
import AnimateText from "./components/AnimateText.jsx";
import Animation_Sequence from "./components/Animation_Sequence.jsx";
import Button from "./components/Button.jsx";
import CardAcernity from "./components/Card_Acernity.jsx";
import Home from "./pages/animation/Home.jsx";
import ExpandableCardList from "./pages/CardOpening/ExpandableCardList.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";

const App = () => {
  const [activeDemo, setActiveDemo] = useState(null);

  const demos = [
    {
      id: "button",
      title: "Button",
      category: "Basic Animations",
      description:
        "3D hover effects with rotation, scale, and shadow animations",
      component: <Button />,
    },
    {
      id: "card-acernity",
      title: "Card",
      category: "Basic Animations",
      description:
        "AnimatePresence with entry/exit animations and hover interactions",
      component: <CardAcernity />,
    },
    {
      id: "animate-text",
      title: "AnimateText",
      category: "Text Animations",
      description:
        "Staggered word-by-word text reveal with blur and opacity effects",
      component: <AnimateText />,
    },
    {
      id: "animation-sequence",
      title: "Animation Sequence",
      category: "Advanced Animations",
      description:
        "Multi-step button animation with loader, morphing, and success state",
      component: <Animation_Sequence />,
    },
    {
      id: "scroll-cards",
      title: "Scroll-based Cards",
      category: "Advanced Animations",
      description:
        "Scroll-triggered animations with blur, scale, and background transitions",
      component: <Home />,
    },
    {
      id: "expandable-cards",
      title: "Expandable Card List",
      category: "Advanced Animations",
      description: "Layout animations with shared element transitions",
      component: <ExpandableCardList />,
    },
    {
      id: "dashboard",
      title: "Dashboard",
      category: "Complex UI",
      description:
        "Animated sidebar with open/close states and dashboard layout",
      component: <Dashboard />,
    },
  ];

  // Group demos by category
  const categories = [...new Set(demos.map((demo) => demo.category))];

  if (activeDemo) {
    return (
      <div className="relative min-h-screen">
        <div className="pointer-events-none fixed top-0 right-0 left-0 z-50 flex justify-center pt-4">
          <button
            onClick={() => setActiveDemo(null)}
            className="pointer-events-auto cursor-pointer rounded-lg bg-gray-800 px-6 py-2.5 font-semibold text-white shadow-xl transition-all hover:bg-gray-700"
          >
            ← Back to Gallery
          </button>
        </div>
        {demos.find((demo) => demo.id === activeDemo)?.component}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 to-gray-950">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900 shadow-lg">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <h1 className="text-4xl font-bold text-white">
            Framer Motion Practice
          </h1>
          <p className="mt-2 text-lg text-gray-300">
            A collection of animation examples and interactive components
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-6 py-12">
        {categories.map((category) => (
          <section key={category} className="mb-12">
            <h2 className="mb-6 text-2xl font-semibold text-gray-100">
              {category}
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {demos
                .filter((demo) => demo.category === category)
                .map((demo) => (
                  <button
                    key={demo.id}
                    onClick={() => setActiveDemo(demo.id)}
                    className="group relative overflow-hidden rounded-xl bg-gray-800 p-6 text-left shadow-lg transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/20"
                  >
                    <div className="absolute inset-0 bg-linear-to-br from-blue-600/20 to-purple-600/20 opacity-0 transition-opacity group-hover:opacity-100" />
                    <div className="relative">
                      <h3 className="text-xl font-semibold text-white">
                        {demo.title}
                      </h3>
                      <p className="mt-2 text-sm text-gray-300">
                        {demo.description}
                      </p>
                      <div className="mt-4 flex items-center text-sm font-medium text-blue-400">
                        View Demo
                        <svg
                          className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </button>
                ))}
            </div>
          </section>
        ))}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-gray-900 py-6">
        <div className="mx-auto max-w-7xl px-6 text-center text-sm text-gray-400">
          <p>Built with React, Framer Motion, and Tailwind CSS</p>
          <p className="mt-2">
            <a
              href="https://github.com/ITx-prash"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-400 transition-colors hover:text-blue-300"
            >
              <IconBrandGithub size={18} />
              @ITx-prash
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
