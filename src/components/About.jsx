

import React from "react";

const skills = {
  frontend: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"],
  backend: ["Node.js", "Express.js"],
  tools: ["Git", "GitHub", "Postman","Authentication"],
};

const About = () => {
  return (
    <section
      id="about"
      className="w-full max-w-6xl mx-auto px-6 py-24"
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-white">
          About <span className="text-purple-500">Me</span>
        </h2>
        <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
          Get to know who I am, what I do, and the technologies I enjoy working with.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* LEFT - ABOUT ME */}
        <div className="bg-slate-900/60 backdrop-blur rounded-2xl p-8 shadow-lg hover:shadow-purple-500/20 transition">
          <h3 className="text-2xl font-semibold text-white mb-4">
            Who I Am
          </h3>
          <p className="text-slate-400 leading-relaxed">
            I’m a <span className="text-white font-medium">B.Tech student</span> who loves
            building modern web applications and learning by doing.
            I enjoy turning ideas into clean, responsive, and interactive
            websites using modern technologies.
          </p>

          <p className="text-slate-400 leading-relaxed mt-4">
            Currently, I’m focused on the <span className="text-purple-400">MERN stack</span>,
            improving my frontend skills, and building real-world projects
            that help me grow as a developer.
          </p>
        </div>

        {/* RIGHT - SKILLS */}
        <div className="space-y-2">
          {/* Frontend */}
          <div className="bg-slate-900/60 rounded-2xl p-6 shadow-lg hover:shadow-blue-500/20 transition">
            <h4 className="text-xl font-semibold text-white mb-2">
              Frontend
            </h4>
            <div className="flex flex-wrap gap-3">
              {skills.frontend.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-sm rounded-full bg-slate-800 text-slate-300 hover:text-white transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="bg-slate-900/60 rounded-2xl p-6 shadow-lg hover:shadow-green-500/20 transition">
            <h4 className="text-xl font-semibold text-white mb-4">
              Backend
            </h4>
            <div className="flex flex-wrap gap-3">
              {skills.backend.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-sm rounded-full bg-slate-800 text-slate-300 hover:text-white transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="bg-slate-900/60 rounded-2xl p-6 shadow-lg hover:shadow-purple-500/20 transition">
            <h4 className="text-xl font-semibold text-white mb-4">
              Tools
            </h4>
            <div className="flex flex-wrap gap-3">
              {skills.tools.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-sm rounded-full bg-slate-800 text-slate-300 hover:text-white transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


