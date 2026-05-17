"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Users, Trophy, ExternalLink } from 'lucide-react';

const EducationSection = () => {
  const educationData = [
    {
      title: "Web and Mobile App Development",
      institution: "Saylani Mass IT Training (SMIT)",
      status: "Certified",
      description: "Intensive MERN stack training. Mastered full-stack development through rigorous projects and industry-standard practices.",
      icon: <Award className="text-pink-400" />
    },
    {
      title: "Intermediate (Pre-Engineering)",
      institution: "City College - Hyderabad",
      status: "In Progress",
      description: "Developing strong analytical and mathematical problem-solving skills through a rigorous science curriculum.",
      icon: <GraduationCap className="text-purple-400" />
    }
  ];

  const achievementData = [
    {
      title: "Lead Volunteer",
      org: "SMIT Entry Test Event",
      detail: "Coordinated logistics for 9,000+ candidates alongside 700+ volunteers. Recognized for leadership and event management.",
      image: "/volunteer-cert.jpeg",
      icon: <Users className="text-blue-400" />
    },
    {
      title: "Hackathon Participant",
      org: "SMIT Hackathon",
      detail: "Successfully built and presented a functional prototype within a competitive 24-hour development cycle.",
      image: "/hackathon-cert.jpeg",
      icon: <Trophy className="text-yellow-400" />
    }
  ];

  return (
    <section id='education' className="min-h-screen w-full py-20 px-6 bg-transparent flex flex-col items-center">
      <div className="max-w-6xl w-full space-y-24">
        
        {/* --- Education Section --- */}
        <div className="space-y-10">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-3xl md:text-4xl font-bold text-white flex items-center gap-3"
          >
            <GraduationCap className="text-purple-500" /> 
            Education
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md relative group hover:border-purple-500/50 transition-all"
              >
                <div className="mb-4">{edu.icon}</div>
                <h3 className="text-xl font-bold text-white">{edu.title}</h3>
                <p className="text-purple-400 text-sm font-medium mb-3">{edu.institution}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- Achievements & Certificates Section --- */}
        <div className="space-y-10">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-3xl md:text-4xl font-bold text-white flex items-center gap-3"
          >
            <Trophy className="text-pink-500" /> Achievements & Certifications
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievementData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="flex flex-col md:flex-row gap-6 p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/[0.08] transition-all"
              >
                {/* Certificate Thumbnail */}
                <div className="relative w-full md:w-40 h-32 shrink-0 rounded-xl overflow-hidden border border-white/10 group cursor-pointer">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-coverscale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <ExternalLink className="text-white w-6 h-6" />
                  </div>
                </div>

                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  </div>
                  <p className="text-pink-400 text-xs font-bold mb-2 uppercase tracking-wide">{item.org}</p>
                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{item.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default EducationSection;