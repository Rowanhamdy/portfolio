"use client";

import Background from "@/app/background/page";
import "animate.css";
import Link from "next/link";

export default function About() {
  return (
    <div className="relative bg-transparent py-20">
      <Background />
      <div className="container mx-auto px-4 md:px-10">
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
          {/* Title Section */}
          <div className="title m-auto w-fit text-center md:text-left">
            <div className="animate__animated animate__fadeInDown">
              <p className="first block font-extrabold">About</p>
              <p className="second">Me</p>
            </div>
            <div className="animate__animated animate__fadeInUp mt-10 md:mt-20">
              <a
                href="/Rowan-Hamdy-CV.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="bg-transparent text-white px-10 py-3 rounded-md hover:bg-indigo-950 transition duration-300"
                  style={{
                    boxShadow: "inset 0 0 40px rgba(55, 54, 403, 0.764)",
                  }}
                >
                  Download Resume
                </button>
              </a>
            </div>
          </div>

          {/* About Me Section */}
          <div className="text-white space-y-10">
            <div>
              <p className="second-color mt-10 text-2xl font-semibold pb-5 animate__animated animate__lightSpeedInLeft">
                Who I Am:
              </p>
              <p className="leading-relaxed about-1 animate__animated animate__lightSpeedInLeft">
                I’m a Frontend Developer based in Alexandria, Egypt. I have
                hands-on experience building web applications using React,
                JavaScript, HTML, and CSS, with a strong focus on creating
                responsive, user-friendly websites. I take pride in writing
                clean, maintainable code that delivers a seamless user
                experience.
              </p>
            </div>

            <div>
              <p className="second-color text-2xl font-semibold pb-10 animate__animated animate__lightSpeedInLeft animate__delay-1s">
                Professional Experience
              </p>

              <h5 className="text-white text-lg font-semibold about-2 animate__animated animate__lightSpeedInLeft animate__delay-1s">
                Internship at NTI - Web Design
              </h5>
              <ul className="list-disc pl-5 space-y-2 animate__animated animate__lightSpeedInLeft animate__delay-1s">
                <li>Gained hands-on experience in designing and developing responsive websites.</li>
                <li>Collaborated with the team to ensure designs were visually appealing and functional.</li>
                <li>Focused on frontend development and web design best practices.</li>
              </ul>

              <h5 className="text-white text-lg font-semibold about-2 animate__animated animate__lightSpeedInLeft animate__delay-1s mt-10">
                <Link href="https://www.pimula.net/">FrontEnd Developer Intern, Pimula</Link>
              </h5>
              <p className="pl-5 animate__animated animate__lightSpeedInLeft animate__delay-1s">
                Building responsive web apps with React.js and Next.js. Collaborating on scalable front-end components, managing state, and optimizing UI performance while following best coding practices.
              </p>
            </div>

            <div className="mt-16 text-center md:text-left">
              <h5 className="text-white text-lg font-semibold animate__animated animate__fadeInDown animate__delay-2s">
                "I'm currently looking to join a <span className="first-color font-bold">cross-functional</span> team that values creating impactful, user-centered frontend experiences through accessible design."
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
