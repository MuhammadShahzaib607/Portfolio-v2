"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { IoMdHome } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { GiGraduateCap } from "react-icons/gi";
import { IoCodeSlash } from "react-icons/io5";
import { IoMail } from "react-icons/io5";

const Tabs = () => {
  const navItems = [
    { icon: <IoMdHome />, id: "home" },
    { icon: <RxAvatar />, id: "about" },
    { icon: <GiGraduateCap />, id: "education" },
    { icon: <IoCodeSlash />, id: "projects" },
    { icon: <IoMail />, id: "contact" },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-10 w-full flex justify-center z-50">
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className='bg-[#130d17]/80 backdrop-blur-lg w-[320px] h-[60px] rounded-full flex items-center justify-evenly text-[22px] text-gray-400 border border-white/10 shadow-2xl sm:w-[380px]'
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className='cursor-pointer transition-all transform hover:scale-90'
          >
            {item.icon}
          </button>
        ))}
      </motion.div>
    </div>
  );
};

export default Tabs;