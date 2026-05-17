"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Lock, Smartphone } from 'lucide-react';

const projects = [
  {
    title: "HealthMate",
    desc: "AI-powered medical assistant that analyzes reports and provides personalized health insights using secure user data systems.",
    tech: ["React.js", "SCSS", "Express.js", "Gemini API", "MongoDB"],
    live: "https://health-mate-frontend-fawn.vercel.app/",
    code: "https://github.com/MuhammadShahzaib607/HealthMate",
    img: "./healthMate.png"
  },
  {
    title: "BrandSocia",
    desc: "A premium platform bridging the gap between global brands and influencers for seamless marketing collaborations and growth.",
    tech: ["Next.js", "Express.js", "MongoDB", "Tailwind", "Framer Motion"],
    live: "https://brandsocia.com/",
    code: null,
    img: "./brandsocia.png"
  },
  {
    title: "ApnaGharApniZameen (AGAZ)",
    desc: "Modern Real Estate application with easy property search, user profiles, and a simple dashboard Screen to manage listings.",
    tech: ["Expo", "Express.js", "JWT", "Bcrypt", "MongoDB", "cloudinary", "Firebase Authentication"],
    live: null,
    code: null,
    img: "./agaz.png"
  }
];

const ProjectsSection = () => {
  return (
    <section id='projects' className="min-h-screen w-full py-20 px-6 bg-transparent flex flex-col items-center">
      <div className="max-w-6xl w-full">
        
        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Featured Projects
          </h2>
          <div className="h-1.5 w-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2"></div>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group rounded-3xl bg-white/5 border border-white/10 overflow-hidden backdrop-blur-md flex flex-col h-full hover:bg-white/[0.08] transition-all"
            >
              {/* Image Container */}
              <div className="relative h-52 overflow-hidden border-b border-white/10">
                <img 
                  src={project.img} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-[10px] font-bold text-white uppercase tracking-widest border border-white/10">
                  {project.tech[0] === "Next.js" || project.tech[0] === "React.js" ? "Website" : "Application"}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {project.desc}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-2 py-1 text-[11px] rounded-md bg-white/5 border border-white/10 text-gray-300">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-6 pt-4 border-t border-white/5">
                {
                  project.live ? 
                  <a 
                    href={project.live} 
                    target="_blank" 
                    className="flex items-center gap-2 text-xs font-bold text-white hover:text-purple-400 transition-colors"
                  >
                    <ExternalLink size={14} /> Live Demo
                  </a> : 
                  <span className="flex items-center gap-2 text-xs font-bold text-gray-500 cursor-not-allowed">
                    <Smartphone size={14} className="text-gray-500" /> Mobile App
                    </span>
                  }
                  
                  {project.code ? (
                    <a 
                      href={project.code} 
                      target="_blank" 
                      className="flex items-center gap-2 text-xs font-bold text-white hover:text-purple-400 transition-colors"
                    >
                      <Github size={14} /> Code
                    </a>
                  ) : (
                    <span className="flex items-center gap-2 text-xs font-bold text-gray-500 cursor-not-allowed">
                      <Lock size={14} /> Private
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;