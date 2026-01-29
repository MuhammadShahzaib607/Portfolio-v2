"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Terminal } from 'lucide-react';

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Tax Filerz & Co.",
    duration: "Dec 2025 - Present",
    description: "Solo developer leading the end-to-end development of enterprise-level web solutions. Managed everything from database architecture to cloud hosting and deployment.",
    skills: ["Next.js", "React", "Node.js", "MongoDB", "Express", "GitHub", "Hostinger"],
    isCurrent: true
  },
  {
    title: "Project-Based Developer",
    company: "Freelance / Self-Employed",
    duration: "June 2025 - Dec 2025",
    description: "Developed custom full-stack applications with a focus on AI integration. Streamlined workflows by automating tasks through smart API implementations.",
    skills: ["React", "Node.js", "Express", "MongoDB", "AI Integration", "GitHub", "Vercel"],
    isCurrent: false
  }
];

const ExperienceSection = () => {
  return (
    <section className="min-h-screen w-full py-20 px-6 bg-transparent flex flex-col items-center">
      <div className="max-w-5xl w-full">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16 space-y-2"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Work Experience
          </h2>
          <div className="h-1.5 w-20 rounded-full"></div>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-purple-500/20 ml-4 md:ml-8 space-y-12">
          
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className={`absolute -left-[11px] top-0 w-5 h-5 rounded-full border-4 border-[#1d1524] ${exp.isCurrent ? 'bg-purple-500 animate-pulse' : 'bg-gray-600'}`}></div>

              {/* Experience Card */}
              <div className="p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl hover:bg-white/[0.08] transition-all group">
                
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-purple-300 mt-1">
                      <Briefcase size={16} />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-400 text-sm">
                    <Calendar size={14} />
                    {exp.duration}
                  </div>
                </div>

                <p className="text-gray-400 leading-relaxed mb-8 max-w-3xl italic">
                  {exp.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2">
                  <div className="flex items-center gap-2 mr-2 text-gray-500">
                    <Terminal size={16} />
                    <span className="text-xs uppercase tracking-widest font-bold">Stack:</span>
                  </div>
                  {exp.skills.map((skill, sIndex) => (
                    <span 
                      key={sIndex}
                      className="px-3 py-1 text-xs font-semibold rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-300 hover:bg-purple-500 hover:text-white transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;