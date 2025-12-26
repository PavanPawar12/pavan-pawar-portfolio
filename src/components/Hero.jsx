import React from "react";
import profile1 from "../assets/profile1.png";
import { motion } from "framer-motion";
import SocialLinks from "./Social";
import StarsBackground from "./Layout/StarsBackground";
const Hero = () => {
  return (
    <section
      id="home"
      className="w-full max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-16 pt-24"
    >
      <StarsBackground />
      {/* LEFT CONTENT */}
      <motion.div
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex-1"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Hi, I’m{" "}
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
            Pavan Pawar
          </span>
        </h1>

        <p className="mt-4 text-lg text-slate-300 max-w-lg">
          A B.Tech student and full-stack (MERN) developer who builds clean,
          responsive, and interactive web experiences.
        </p>

        <div className="mt-6 flex gap-4">
          <a
            href="/Pavan_Pawar_CV.pdf"
            className="px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300"
          >
            Download Resume
          </a>

          <a
            href="#contact"
            className="px-5 py-3 rounded-xl border border-slate-400 font-medium hover:bg-gray-800 transition-colors"
          >
            Contact
          </a>
        </div>
        <div>
          <SocialLinks />
        </div>
      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative flex justify-center items-center"
      >
        {/* Glowing circular ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 12,
            ease: "linear",
          }}
          className="absolute w-52 h-52 md:w-72 md:h-72 rounded-full
               bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500
               blur-md opacity-80"
        />

        {/* Image container */}
        <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden bg-black shadow-2xl border-4 border-black">
          <motion.img
            src={profile1}
            alt="Pavan Pawar"
            className="w-full h-full object-contain rounded-full"
            // animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
