"use client";

import Link from "next/link";
import {
  FaHome,
  FaUser,
  FaTools,
  FaFolderOpen,
  FaEnvelope,
} from "react-icons/fa";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope as faMail,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-gray-950 py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-white">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* About */}
          <div>
            <h2 className="text-xl font-bold mb-2">Rowan Hamdy</h2>
            <p className="text-gray-300 max-w-sm">
              I create responsive and user-friendly websites using modern tools
              and clean code.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-bold mb-2">Quick Links</h2>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <FaHome className="text-indigo-800" />
                <Link href="/">Home</Link>
              </li>
              <li className="flex items-center gap-2">
                <FaUser className="text-indigo-800" />
                <Link href="/about">About</Link>
              </li>
              <li className="flex items-center gap-2">
                <FaTools className="text-indigo-800" />
                <Link href="/skills">Skills</Link>
              </li>
              <li className="flex items-center gap-2">
                <FaFolderOpen className="text-indigo-800" />
                <Link href="/projects">Projects</Link>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-indigo-800" />
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h2 className="text-xl font-bold mb-2">Get In Touch</h2>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <FontAwesomeIcon
                  icon={faMail}
                  className="text-indigo-800 text-lg"
                />
                <a
                  href="mailto:rowaaamhamdy2001@gmail.com"
                  className="text-gray-300 hover:text-indigo-400"
                >
                  rowaaamhamdy2001@gmail.com
                </a>
              </li>

              <li className="flex items-center gap-3">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-indigo-800 text-lg"
                />
                <span className="text-gray-300">
                  +2 01211836843
                </span>
              </li>

              <li className="flex items-center gap-3">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-indigo-800 text-lg"
                />
                <span className="text-gray-300">Egypt</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h2 className="text-xl font-bold mb-2">Connect</h2>
            <div className="flex gap-4 mt-3">
              <a
                href="https://github.com/Rowanhamdy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-2xl hover:text-indigo-400"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/rowan-hamdy-morshdey/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-2xl hover:text-indigo-400"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-800 pt-4 text-center text-sm text-gray-400">
          © 2025 Rowan Hamdy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
