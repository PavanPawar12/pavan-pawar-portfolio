import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-slate-800 bg-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-6 py-8 text-center"
      >
        <p className="text-sm text-slate-400">
          Built while learning, learning while building{" "}
          <span className="text-red-500">❤️</span>
        </p>

        <p className="mt-2 text-sm text-slate-500">
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-medium">Pavan Pawar</span>
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
