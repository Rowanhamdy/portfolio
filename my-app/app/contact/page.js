"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import * as Yup from "yup";
import { useFormik } from "formik";
import Background from "../background/page";

export default function Contact() {
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    subject: Yup.string().required("Subject is required"),
    textarea: Yup.string().required("Message is required"),
  });

  const formik = useFormik({
    initialValues: { firstName: "", lastName: "", email: "", subject: "", textarea: "" },
    validationSchema,
    onSubmit: async (values) => {
      await fetch("http://localhost:3006/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      formik.resetForm();
    },
  });

  return (
    <div className="relative h-full py-20 overflow-hidden">
      <Background />

      <div className="container mx-auto px-4 md:px-8 relative" >
        {/* Header */}
        <div className="firstsec">
          <h2 className="text-white text-center animate__animated animate__fadeInDown text-5xl mb-10 font-extrabold first block">
            Get In <span className="first-color">Touch</span>
          </h2>
          <p className="text-gray-400 text-center animate__animated animate__fadeInUp max-w-5xl mx-auto text-xl mb-12">
            "If you have a project in mind or are interested in collaborating, feel free to get in touch via the contact form below or through the provided contact details."
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-8">
          {/* Contact Info */}
          <div className="text-white z-10 mt-10">
            <h2 className="font-bold text-2xl mb-6">Contact Information</h2>
            <ul className="space-y-6">
              <li className="flex items-center space-x-4">
                <FontAwesomeIcon icon={faEnvelope} className="p-3 rounded-xl text-indigo-800 bg-emerald-100 text-lg" />
                <div>
                  <p className="font-semibold">Email</p>
                  <a href="mailto:rowaaamhamdy2001@gmail.com" className="text-gray-300 hover:text-indigo-400 transition">
                    rowaaamhamdy2001@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-center space-x-4">
                <FontAwesomeIcon icon={faPhone} className="p-3 rounded-xl text-indigo-800 bg-emerald-100 text-lg" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-gray-300 cursor-default">+2 01211836843</p>
                </div>
              </li>
              <li className="flex items-center space-x-4">
                <FontAwesomeIcon icon={faLocationDot} className="p-3 rounded-xl text-indigo-800 bg-emerald-100 text-lg" />
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-gray-300 cursor-default">Egypt</p>
                </div>
              </li>
            </ul>

            <h2 className="font-bold text-xl mt-10 mb-6">Follow Me</h2>
            <div className="flex gap-5">
              <a href="https://github.com/Rowanhamdy" target="_blank">
                <FontAwesomeIcon icon={faGithub} className="p-3 rounded-xl text-indigo-800 bg-emerald-100 text-lg" />
              </a>
              <a href="https://www.linkedin.com/in/rowan-hamdy-morshdey/" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} className="p-3 rounded-xl text-indigo-800 bg-emerald-100 text-lg" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="border border-indigo-100 z-10 rounded-2xl p-5 text-white">
            <form onSubmit={formik.handleSubmit} className="space-y-8">
              <h2 className="second-color animate__animated animate__fadeInDownBig">
                Have something to discuss? Send me a message and let's talk.
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-6 gap-x-6 gap-y-8">
                <div className="sm:col-span-3  animate__animated animate__backInUp">
                  <label htmlFor="firstName" className="block text-sm font-medium">First name</label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="Your name"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                    className="block w-full rounded-md bg-grey px-3 py-1.5 outline outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm mt-2  "
                  />
                  {formik.touched.firstName && formik.errors.firstName && <p className="text-red-500 text-sm mt-1">{formik.errors.firstName}</p>}
                </div>

                <div className="sm:col-span-3 animate__animated animate__backInUp ">
                  <label htmlFor="lastName" className="block text-sm font-medium">Last name</label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Your name"
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                    className="block w-full rounded-md bg-grey px-3 py-1.5 outline outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm mt-2"
                  />
                  {formik.touched.lastName && formik.errors.lastName && <p className="text-red-500 text-sm mt-1">{formik.errors.lastName}</p>}
                </div>

                <div className="sm:col-span-4 animate__animated animate__backInUp animate__delay-1s ">
                  <label htmlFor="email" className="block text-sm font-medium">Email address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="example@gmail.com"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    className="block w-full rounded-md bg-grey px-3 py-1.5 outline outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm mt-2"
                  />
                  {formik.touched.email && formik.errors.email && <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>}
                </div>

                <div className="sm:col-span-4 animate__animated animate__backInUp animate__delay-2s ">
                  <label htmlFor="subject" className="block text-sm font-medium">Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Project Inquiry"
                    onChange={formik.handleChange}
                    value={formik.values.subject}
                    className="block w-full rounded-md bg-grey px-3 py-1.5 outline outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm mt-2"
                  />
                  {formik.touched.subject && formik.errors.subject && <p className="text-red-500 text-sm mt-1">{formik.errors.subject}</p>}
                </div>

                <div className="sm:col-span-4 animate__animated animate__backInUp animate__delay-3s">
                  <label htmlFor="textarea" className="block text-sm font-medium">Message</label>
                  <textarea
                    id="textarea"
                    name="textarea"
                    rows={3}
                    placeholder="Hello, I would like to talk about..."
                    onChange={formik.handleChange}
                    value={formik.values.textarea}
                    className="block w-full rounded-md bg-grey px-3 py-1.5 outline outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm mt-2"
                  />
                  {formik.touched.textarea && formik.errors.textarea && <p className="text-red-500 text-sm mt-1">{formik.errors.textarea}</p>}
                </div>
              </div>

              <div className="flex justify-end gap-x-4 mt-6 animate__animated animate__backInUp animate__delay-4s animate__faster">
                <button type="button" className="text-sm font-semibold">Cancel</button>
                <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
