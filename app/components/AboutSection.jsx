"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Briefcase, Mail, Sparkles } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id='about' className="min-h-screen w-full flex items-center justify-center px-6 py-20 bg-transparent">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Card: Main About Info */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl flex flex-col md:flex-row gap-8 items-start"
        >
          {/* Profile Pic Container */}
          <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 rounded-2xl overflow-hidden border-2 border-purple-500/30">
            <img 
              src="./selfPic.jpeg" 
              alt="Muhammad Shahzaib" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-2 text-xl font-bold text-white">
              <Sparkles className="text-purple-400 w-5 h-5" />
              <h2>About Me</h2>
            </div>
            
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              I'm a dedicated <span className="text-purple-400 font-medium">MERN Stack Developer</span> with a strong passion for integrating <span className="text-blue-400">Artificial Intelligence</span> into web ecosystems. I specialize in building scalable applications and have successfully engineered <span className="text-pink-400">WhatsApp Chatbots</span> for seamless business automation.
            </p>
            
            <p className="text-gray-400 leading-relaxed text-sm md:text-base italic">
              Driven by innovation, I focus on crafting clean code and user-centric designs. My goal is to bridge the gap between complex backend logic and intuitive frontend interfaces to solve real-world challenges efficiently.
            </p>
          </div>
        </motion.div>

        {/* Right Card: Quick Info */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl flex flex-col justify-center space-y-8"
        >
          {/* Location */}
          <div className="flex items-center gap-4">
            <div className="p-3 bg-purple-500/10 rounded-xl">
              <MapPin className="text-purple-400 w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider">Location</p>
              <p className="text-white font-semibold">Karachi, Pakistan</p>
            </div>
          </div>

          {/* Experience */}
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-500/10 rounded-xl">
              <Briefcase className="text-blue-400 w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider">Experience</p>
              <p className="text-white font-semibold">1+ Years</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4 overflow-hidden">
            <div className="p-3 bg-pink-500/10 rounded-xl shrink-0">
              <Mail className="text-pink-400 w-6 h-6" />
            </div>
            <div className="min-w-0">
              <p className="text-xs text-gray-500 uppercase tracking-wider">Email</p>
              <p className="text-white font-semibold truncate text-sm md:text-base">
                muhammadshahzaib6077@gmail.com
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;