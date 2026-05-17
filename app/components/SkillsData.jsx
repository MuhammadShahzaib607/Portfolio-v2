"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState('Frontend');

  const skillsData = {
    Frontend: [
      { name: "HTML/CSS", level: 88 },
      { name: "JavaScript", level: 80 },
      { name: "React JS", level: 80 },
      { name: "Next.js", level: 68 },
      { name: "React Native (Expo)", level: 80 },
      { name: "Tailwind CSS", level: 85 },
      { name: "SCSS", level: 90 },
    ],
    Backend: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 80 },
      { name: "MongoDB", level: 70 },
      { name: "NoSQL", level: 80 },
      { name: "JWT", level: 88 },
      { name: "Firebase", level: 60 },
    ],
    Advanced: [
      { name: "Redis (Caching)", level: 50 },
      { name: "AI Integration (Gemini & Groq)", level: 65 },
      { name: "Cloudinary", level: 75 },
      { name: "k6 (Basic Load Testing)", level: 45 },
    ],
    Tools: [
      { name: "GitHub", level: 85 },
      { name: "Postman", level: 90 },
      { name: "Vercel", level: 80 },
      { name: "VS Code", level: 90 },
    ],
    Soft: [
      { name: "Problem Solving", level: 87 },
      { name: "Team Collaboration", level: 90 },
      { name: "Communication", level: 85 },
    ]
  };

  return (
    <section className="min-h-screen w-full py-20 px-6 bg-transparent flex flex-col items-center">
      <div className="max-w-5xl w-full">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-12 text-center lg:text-left"
        >
          <h2 className="text-4xl font-bold text-white tracking-tight">
            Skills & Technologies
          </h2>
          <div className="h-1 w-20 bg-purple-500 mt-2 mx-auto lg:mx-0"></div>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-12">
          {Object.keys(skillsData).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeTab === tab 
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30' 
                : 'bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="wait">
            {skillsData[activeTab].map((skill, index) => (
              <motion.div
                key={`${activeTab}-${skill.name}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="text-white font-medium">{skill.name}</span>
                  {/* <span className="text-purple-400 text-xs font-bold">{skill.level}%</span> */}
                </div>
                
                {/* Progress Bar Container */}
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default SkillsSection;