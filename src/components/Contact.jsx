import React from "react";
import { FiMail, FiMapPin } from "react-icons/fi";
import SocialLinks from "./Social.jsx";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full max-w-6xl mx-auto px-6 py-24"
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-white">
          Get In <span className="text-purple-500">Touch</span>
        </h2>
        <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
          Have a project idea, collaboration, or just want to say hello?  
          Feel free to reach out.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* LEFT SIDE */}
        <div className="bg-slate-900/60 rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold text-white mb-4">
            Contact Information
          </h3>

          <p className="text-slate-400 mb-6">
            I’m always open to discussing new opportunities, ideas, or collaborations.
          </p>

          <div className="space-y-4 text-slate-300">
            <div className="flex items-center gap-3">
              <FiMail className="text-purple-500" />
              <span>pavanpawar9923100@gmail.com</span>
            </div>

            <div className="flex items-center gap-3">
              <FiMapPin className="text-purple-500" />
              <span>India</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-6">
            <SocialLinks/>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="bg-slate-900/60 rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold text-white mb-6">
            Send a Message
          </h3>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white
                         placeholder-slate-400 focus:outline-none focus:ring-2
                         focus:ring-purple-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white
                         placeholder-slate-400 focus:outline-none focus:ring-2
                         focus:ring-purple-500"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white
                         placeholder-slate-400 focus:outline-none focus:ring-2
                         focus:ring-purple-500 resize-none"
            ></textarea>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600
                         text-white font-semibold hover:scale-[1.02] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
   
  );
};

export default Contact;

