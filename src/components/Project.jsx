// // import React from 'react'

// // const Project = () => {
// //   return (
// //     // This is project component should be in whole page 2 col gap --
// //     // just showing one col something like this 
// //     <div>
// //       project section
// //       <div>
// //         name of project                -- link/ or uploaded code
// //             Skill - like react, js , node -- something like this
// //         About this project one to two line
        
// //         </div>  
      
// //     </div>
// //   )
// // }

// // export default Project


// import React from "react";
// import { FiGithub, FiExternalLink } from "react-icons/fi";

// const projects = [
//   {
//     title: "Portfolio Website",
//     description:
//       "A modern personal portfolio built using React, Tailwind CSS, and Framer Motion.",
//     tech: ["React", "Tailwind CSS", "Framer Motion"],
//     github: "https://github.com/yourusername/portfolio",
//     live: "#",
//   },
//   {
//     title: "MERN Authentication App",
//     description:
//       "Full-stack authentication system with login, signup, and protected routes.",
//     tech: ["MongoDB", "Express", "React", "Node.js"],
//     github: "https://github.com/yourusername/mern-auth",
//     live: "#",
//   },
//   {
//     title: "Task Manager App",
//     description:
//       "A responsive task manager app with CRUD operations and clean UI.",
//     tech: ["React", "JavaScript", "CSS"],
//     github: "https://github.com/yourusername/task-manager",
//     live: "#",
//   },
// ];

// const Project = () => {
//   return (
//     <section
//       id="projects"
//       className="w-full max-w-6xl mx-auto px-6 py-24"
//     >
//       {/* Heading */}
//       <div className="text-center mb-16">
//         <h2 className="text-4xl font-extrabold text-white">
//           My <span className="text-purple-500">Projects</span>
//         </h2>
//         <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
//           A selection of projects that showcase my skills and learning journey.
//         </p>
//       </div>

//       {/* Projects Grid */}
//       <div className="grid gap-8 md:grid-cols-2">
//         {projects.map((project, index) => (
//           <div
//             key={index}
//             className="group bg-slate-900/60 backdrop-blur rounded-2xl p-6 shadow-lg transition-all duration-300
//                        hover:-translate-y-2 hover:shadow-purple-500/20"
//           >
//             {/* Project Title */}
//             <h3 className="text-2xl font-semibold text-white">
//               {project.title}
//             </h3>

//             {/* Description */}
//             <p className="mt-3 text-slate-400 leading-relaxed">
//               {project.description}
//             </p>

//             {/* Tech Stack */}
//             <div className="mt-4 flex flex-wrap gap-2">
//               {project.tech.map((tech, i) => (
//                 <span
//                   key={i}
//                   className="px-3 py-1 text-sm rounded-full bg-slate-800 text-slate-300
//                              group-hover:bg-purple-600 group-hover:text-white transition"
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>

//             {/* Links */}
//             <div className="mt-6 flex gap-4">
//               <a
//                 href={project.github}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-2 text-slate-300 hover:text-white transition"
//               >
//                 <FiGithub />
//                 Code
//               </a>

//               <a
//                 href={project.live}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-2 text-slate-300 hover:text-white transition"
//               >
//                 <FiExternalLink />
//                 Live
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Project;


import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "Job Portal",
    description:
      "A simple job portal that connects job seekers with recruiters through job listings and applications.",
    tech: ["React", "Tailwind", "express.js", "git"],
    github: "https://github.com/PavanPawar12/job-portal",
    live: "#Not lived right now",
  },
  {
    title: "TextUtils",
    description:
      "A text utility tool for analyzing and cleaning text using React and Tailwind CSS.",
    tech: ["Tailwind css", "React js", "React"],
    github: "https://text-utils-react-six-rosy.vercel.app/",
  },
  {
    title: "zero-hunger-hub",
    description:
      " A food donation platform connecting donors with NGOs and shelters to reduce food waste through real-time requests and role-based dashboards.",
    tech: ["React js", "Tailwind css", "MongoDB", "Express", "Node.js"],
    github: "https://github.com/PavanPawar12/zero-hunger-hub",
  },
  {
    title: "MindMates-Education",
    description:
      "A React-based education platform with login/signup, routing, and responsive UI using Tailwind CSS.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    github: "https://github.com/PavanPawar12/MindMates-Education",
  },
];




const Project = () => {
  return (
    <section
      id="projects"
      className="w-full max-w-6xl mx-auto px-6 py-24"
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-white">
          My <span className="text-purple-500">Projects</span>
        </h2>
        <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
          Some of the projects I’ve built while learning and exploring web development.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group bg-slate-900/60 rounded-2xl p-6 shadow-lg
                       transition-all duration-300 hover:-translate-y-2
                       hover:shadow-purple-500/20"
          >
            {/* Title + Link */}
            <div className="flex items-start justify-between">
              <h3 className="text-2xl font-semibold text-white">
                {project.title}
              </h3>

              <a
                href={project.live || project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition"
                title={project.live ? "Live Project" : "GitHub Repository"}
              >
                {project.live ? (
                  <FiExternalLink size={20} />
                ) : (
                  <FiGithub size={20} />
                )}
              </a>
            </div>

            {/* Description */}
            <p className="mt-3 text-slate-400 leading-relaxed">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm rounded-full bg-slate-800 text-slate-300
                             group-hover:text-white transition"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
