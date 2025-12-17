"use client";

import { useEffect } from "react";
import Typed from "typed.js";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Background from "@/app/background/page";
import About from "../about/page";
import Skills from "../skills/page";
import Projects from "../projects/page";
import Contact from "../contact/page";


export default function Header() {
  useEffect(() => {
    const typed = new Typed("#text-typed", {
      strings: ["Web Designer .", "Frontend Developer."],
      typeSpeed: 50,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  const myName1 = " Rowan Hamdy";

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <div className="relative min-h-screen py-20 overflow-hidden">
        <Background />

        {/* Content */}
        <div className="relative z-20 container mx-auto px-4 md:px-8">
          <p className="text-white mt-5 animate__animated animate__fadeInUp text-center pb-10 welcome">
            Welcome to my Portfolio
          </p>

          <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
            {/* Profile Image */}
            <div className="relative img-arrow m-auto">
              <Image
                src="/images/Gradient.png"
                alt="Gradient"
                width={340}
                height={340}
                className="animate__animated animate__fadeInDown rounded-full object-cover shadow-4xl "
                loading="eager"
              />
              <Image
                src="/images/image.jpeg"
                alt="Rowan Hamdy"
                width={200}
                height={200}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-50 h-50 rounded-full border-4 border-white shadow-2xl animate__animated animate__fadeInDown"
              />
            </div>

            {/* Text */}
            <div className="md:text-left sm:text-center ml-10 md:ml-20">
              <h1 className="text-white text-4xl font-bold pb-20 pt-10 animate__animated animate__fadeInUp">
                Hello! I Am{" "}
                <span className="second-color z-20 hover-text">
                  {myName1.split("").map((char, index) => (
                    <span key={index} style={{ transitionDelay: `${index * 0.1}s` }}>
                      {char}
                    </span>
                  ))}
                </span>
              </h1>

              <h4 className="text-white text-xl font-semibold mb-6 w-80 animate__animated animate__fadeInUp">
                I Am a{" "}
                <span className="second-color font-extrabold animate__animated animate__fadeInUp" id="text-typed"></span>
              </h4>

              <h5 className="text-white font-extrabold animate__animated animate__fadeInUp">
                "I build responsive, accessible, and engaging web experiences using modern frontend technologies and clean, maintainable code."
              </h5>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-center mt-10 gap-4 btns">
            <Link href="/projects" aria-label="View my projects">
              <button className="btn1 bg-transparent text-white px-10 py-3 rounded-md hover:bg-indigo-950 transition duration-300" style={{ boxShadow: "inset 0 0 40px rgba(55, 30, 463, 0.764)" }}>
                My Work
              </button>
            </Link>
            <Link href="/contact" aria-label="Contact me">
              <button className="bg-transparent text-white px-10 py-3 rounded-md hover:bg-indigo-950 transition duration-300" style={{ boxShadow: "inset 0 0 40px rgba(55, 54, 403, 0.764)" }}>
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 bg-blue-950 text-indigo-300 rounded-full p-3 shadow-md hover:bg-indigo-800 transition duration-300"
      >
        <FontAwesomeIcon icon={faArrowUp} className="text-lg" />
      </button>

      {/* Sections */}
      <div className="relative z-20">
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </>
  );
}
