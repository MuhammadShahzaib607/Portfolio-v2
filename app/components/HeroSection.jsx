"use client";
import React from 'react';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';

const HeroSection = () => {

const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id='home' className="relative min-h-screen w-full flex items-center justify-center px-4 md:px-10 overflow-hidden bg-transparent">
      
      <div className="max-w-7xl w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-5">
        
        {/* --- Left Side: Text Content --- */}
        <motion.div 
          initial={{ opacity: 0, x: -100 }} // Left se bahar
          animate={{ opacity: 1, x: 0 }}    // Apni jagah par
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-[60%] flex flex-col items-center lg:items-start text-center lg:text-left z-10"
        >
          
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-6 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-medium backdrop-blur-sm"
          >
            <span className="mr-2 inline-block w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
            Available for opportunities
          </motion.div>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#cc569f] to-[#6b429c]">
              Muhammad Shahzaib
            </span>
          </h1>

          {/* Typewriter Section */}
          <div className="mt-4 flex items-center gap-3 text-lg md:text-2xl font-semibold text-gray-200">
            <span className="text-purple-500 font-mono">{"</>"}</span>
            <span>I am a</span>
            <span className="text-white min-w-[150px]">
              <Typewriter
                options={{
                  strings: ['MERN Stack Developer', 'Frontend Developer', 'Backend Developer'],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                  delay: 80,
                }}
              />
            </span>
          </div>

          {/* Bio */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-6 text-gray-400 text-sm md:text-lg max-w-[500px] leading-relaxed"
          >
            I build high-performance, scalable web solutions with a focus on 
            seamless user experience and modern architecture.
          </motion.p>

          {/* Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-8 flex flex-row items-center gap-5"
          >
            <a
            href="/Shahzaib-Resume.pdf" 
  download="Muhammad_Shahzaib_Full_Stack_Developer_Resume.pdf" 
  className="inline-block"
            >
              <button className="px-7 py-2.5 bg-[#4f46e5] hover:bg-[#4338ca] text-white rounded-full font-medium transition-all transform cursor-pointer shadow-lg shadow-indigo-500/20">
              Download CV
            </button>
            </a>
            <button className="px-7 py-2.5 bg-transparent hover:bg-white/5 border border-white/20 text-white rounded-full font-medium transition-all cursor-pointer"
            onClick={() => scrollToSection("projects")}
            >
              View Work
            </button>
          </motion.div>
        </motion.div>

        {/* --- Right Side: Image with Scale & Fade --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, x: 100 }} // Right se nikal ke aayega
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "circOut" }}
          className="w-full lg:w-[40%] flex justify-center lg:justify-end relative"
        >
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 bg-purple-600/10 rounded-full blur-[100px]"></div>
          
          <motion.div 
            whileHover={{ rotate: 2, scale: 1.02 }} // Hover effect
            className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] rounded-full p-1 bg-gradient-to-b from-purple-500 to-transparent shadow-[0_0_50px_-12px_rgba(168,85,247,0.4)]"
          >
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-[#130914]">
              <img 
                src="/heroImg.jpg" 
                alt="Muhammad Shahzaib" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;