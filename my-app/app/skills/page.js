"use client";

import Image from "next/image";
import Background from "../background/page";

export default function Skills() {
  return (
    <div className="relative h-full py-20 overflow-hidden">
     <Background />
      <div className="container mx-auto px-4 md:px-8 relative z-20">
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
          {/* First Section */}
          <div className="firstsec animate__animated animate__backInLeft">
            <h2 className="text-white mt-12 animate__animated animate__fadeInDown text-center text-5xl mb-20 font-extrabold">
              <span className="first-color">My </span>Skills
            </h2>

            <p className="text-white text-center max-w-5xl animate__animated animate__fadeInUp mx-auto text-2xl mb-12">
              "My technical skill set includes a solid foundation in frontend
              development, with hands-on experience using modern tools and
              frameworks to create high-quality web experiences."
            </p>

            <div className="flex justify-center">
              <Image
                src="/images/images1.png"
                alt="Skills Illustration"
                width={400}
                height={400}
                className="w-3/4 max-w-xs sm:max-w-md md:max-w-lg rounded-xl shadow-xl mt-60 img-skills"
              />
            </div>
          </div>

          {/* Second Section */}
          <div className="secondsec">
            <h2 className="animate__animated animate__pulse animate__infinite text-2xl text-center my-10 second-color">
              Core Competencies
            </h2>

            <div className="flex flex-wrap animate__animated animate__fadeInRight mt-20 justify-center gap-6">
              {[
                { src: "/images/html-icon.png", name: "HTML5", color: "rgba(105, 77, 6, 0.742)", border: "amber-700" },
                { src: "/images/css-icon.png", name: "CSS3", color: "rgba(6, 192, 209, 0.742)", border: "cyan-500" },
                { src: "/images/bootstrap-icon.png", name: "Bootstrap", color: "rgba(105, 10, 107, 0.37)", border: "fuchsia-300" },
                { src: "/images/tailwind-css-icon.png", name: "Tailwind", color: "rgba(106, 150, 209, 0.742)", border: "blue-300" },
                { src: "/images/javascript.png", name: "JavaScript", color: "rgba(203, 228, 13, 0.7)", border: "yellow-300" },
                { src: "/images/typescript-icon.png", name: "TypeScript", color: "rgba(15, 164, 251, 0.7)", border: "blue-700" },
                { src: "/images/react-js-icon.png", name: "React", color: "rgba(12, 228, 217, 0.759)", border: "cyan-300" },
                { src: "/images/nextjs-icon.png", name: "Next.js", color: "rgba(88, 105, 105, 0.381)", border: "white" },
              ].map((tech, i) => (
                <div
                  key={i}
                  className={`bg-transparent animate__animated animate__flipInX p-6 rounded-lg border w-40 text-center transform hover:scale-105 transition duration-300 border-${tech.border}`}
                  style={{ boxShadow: `inset 0 0 50px ${tech.color}` }}
                >
                  <Image src={tech.src} alt={tech.name} width={64} height={64} className="mx-auto h-16" />
                  <h2 className="text-white mt-4 text-lg font-semibold">{tech.name}</h2>
                </div>
              ))}
            </div>

            <h2 className="text-2xl animate__animated animate__pulse animate__infinite text-center my-10 second-color">
              Technologies & Tools
            </h2>

            <div className="flex flex-wrap justify-center gap-10 animate__animated animate__fadeInRight">
              {[
                { src: "/images/git-icon.png", name: "Git", color: "rgba(255, 124, 43, 0.764)", border: "orange-500" },
                { src: "/images/github-icon.png", name: "GitHub", color: "rgba(103, 102, 708, 0.189)", border: "gray-500" },
                { src: "/images/redux-icon.png", name: "Redux", color: "rgba(103, 17, 202, 0.803)", border: "purple-500" },
                { src: "/images/npm-icon.png", name: "NPM", color: "rgba(133, 104, 24, 5.803)", border: "orange-500" },
                { src: "/images/sass-icon.png", name: "SASS", color: "rgba(503, 17, 202, 0.803)", border: "pink-500" },
              ].map((tool, i) => (
                <div
                  key={i}
                  className={`bg-transparent animate__animated animate__flipInX p-6 rounded-lg border w-40 text-center transform hover:scale-105 transition duration-300 border-${tool.border}`}
                  style={{ boxShadow: `inset 0 0 50px ${tool.color}` }}
                >
                  <Image src={tool.src} alt={tool.name} width={64} height={64} className="mx-auto h-16" />
                  <h2 className="text-white mt-4 text-lg font-semibold">{tool.name}</h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
