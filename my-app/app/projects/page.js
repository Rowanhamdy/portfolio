"use client";

import Image from "next/image";
import Background from "../background/page";

export default function Projects() {
  const projects = [
    {
      img: "/images/proj7.png",
      title: "🛒 Shop.Co",
      tech: [
        "⚛️ Next.js",
        "🔗 dummyjson.com",
        "💅 Tailwind CSS",
        "🛒 React",
        "💳 Stripe",
        "🌐 Vercel",
      ],
      live: "https://shopping-rosy-theta.vercel.app/",
      code: "https://github.com/Rowanhamdy/shopping",
    },
    {
      img: "/images/proj1.png",
      title: "🎬 Trending Movies",
      tech: ["⚛️ React.js", "⚡ Vite", "💅 CSS3", "🎬 TMDb API", "📡 Axios"],
      live: "https://rowanhamdy.github.io/TrendingMovie/",
      code: "https://github.com/Rowanhamdy/TrendingMovie",
    },
    {
      img: "/images/proj2.png",
      title: "📋 TodoList",
      tech: [
        "⚛️ React.js",
        "⚡ Vite",
        "💅 CSS3",
        "🎨 react-bootstrap",
        "📄 Yup",
        "🧭 react-router-dom",
        "📃 Formik",
        "🗂️ JSON Server",
      ],
      live: "https://rowanhamdy.github.io/TodoList/",
      code: "https://github.com/Rowanhamdy/TodoList",
    },
    {
      img: "/images/proj3.png",
      title: "🛠️ Crud System",
      tech: [
        "⚛️ React.js",
        "⚡ Vite",
        "💅 CSS3",
        "🎨 react-bootstrap",
        "📄 Yup",
        "🧭 react-router-dom",
        "📃 Formik",
        "🗂️ JSON Server",
      ],
      live: "https://rowanhamdy.github.io/CrudApp",
      code: "https://github.com/Rowanhamdy/CrudApp",
    },
  ];

  return (
    <div className="relative h-full py-20 overflow-hidden">
      <Background />
      <div className="container mx-auto px-4 md:px-8 relative z-20">
        {/* Header */}
        <div className="firstsec">
          <h2 className="text-white text-center animate__animated animate__fadeInDown text-5xl mb-10 font-extrabold">
            My <span className="first-color">Projects</span>
          </h2>
          <p className="text-gray-400 text-center animate__animated animate__fadeInUp max-w-5xl mx-auto text-xl mb-12">
            "Here are some of my recent projects. Each project showcases
            different skills and technologies I've worked with."
          </p>
        </div>

        {/* Projects Grid */}
        <div className="flex flex-wrap mx-auto mt-20 justify-center gap-5">
          {projects.map((proj, i) => {
            // Alternate animations
            const animation =
              i % 2 === 0
                ? "animate__animated animate__lightSpeedInLeft"
                : "animate__animated animate__lightSpeedInRight";

            return (
              <div
                key={i}
                className={`bg-color-nav ${animation} w-100 border rounded-xl shadow-lg max-w-xl mx-auto mt-2 overflow-hidden transition-transform transform hover:scale-105 duration-300`}
              >
                <Image
                  src={proj.img}
                  alt={proj.title}
                  width={800}
                  height={400}
                  className="w-full h-auto rounded-t-xl"
                />

                <div className="p-2 text-white">
                  <h2 className="text-2xl font-bold mb-4">{proj.title}</h2>
                </div>

                <div className="flex flex-wrap gap-2 px-4 pb-2 text-white">
                  {proj.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="bg-cyan-800 border border-cyan-700 rounded-full px-1 py-1 text-sm font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center px-8 py-2 border-t border-cyan-800 text-fuchsia-300 font-semibold">
                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition"
                  >
                    🚀 Live Demo
                  </a>
                  <a
                    href={proj.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition"
                  >
                    💻 Source Code
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Projects */}
        <div className="flex flex-wrap animate__animated animate__swing animate__infinite mx-auto mt-20 justify-center text-white">
          <a
            style={{ boxShadow: "inset 0 0 40px rgba(55, 54, 403, 0.764)" }}
            className="bg-transparent text-white px-10 py-3 rounded-md hover:bg-indigo-950 transition duration-300"
            href="https://github.com/Rowanhamdy?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            🚀 View all Projects
          </a>
        </div>
      </div>
    </div>
  );
}
