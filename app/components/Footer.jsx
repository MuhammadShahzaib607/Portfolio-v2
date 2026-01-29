"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={20} />, url: "https://github.com/MuhammadShahzaib607", label: "GitHub" },
    { icon: <Linkedin size={20} />, url: "https://www.linkedin.com/in/muhammadshahzaib607/", label: "LinkedIn" },
    { icon: <Youtube size={20} />, url: "https://www.youtube.com/@RaqamAl-Fann", label: "Youtube" },
    { icon: <Instagram size={20} />, url: "https://instagram.com/raqamalfannofficial", label: "Instagram" },
  ];

  return (
    <footer className="w-full py-12 pb-33 px-6 bg-transparent flex flex-col items-center justify-center border-t border-white/5">
      
      {/* Social Icons Container */}
      <div className="flex items-center gap-6 mb-6">
        {socialLinks.map((social, index) => (
          <motion.a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5, scale: 1.1 }}
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all"
            aria-label={social.label}
          >
            {social.icon}
          </motion.a>
        ))}
      </div>

      {/* Copyright Text */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-center"
      >
        <p className="text-gray-500 text-sm tracking-wide">
          © {currentYear} <span className="text-white font-medium">Muhammad Shahzaib</span>. All rights reserved.
        </p>
      </motion.div>

    </footer>
  );
};

export default Footer;