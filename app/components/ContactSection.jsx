"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
  return (
    <section id='contact' className="min-h-screen w-full py-20 px-6 bg-transparent flex flex-col items-center justify-center">
      <div className="max-w-6xl w-full">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="mt-4 text-gray-400 max-w-lg">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            {/* Email */}
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-all">
                <Mail className="text-purple-400 w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Email</p>
                <a href="mailto:muhammadshahzaib6077@gmail.com" className="text-white hover:text-purple-400 transition-colors">
                  muhammadshahzaib6077@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-all">
                <Phone className="text-blue-400 w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Phone</p>
                <a href="tel:+923403004439" className="text-white hover:text-blue-400 transition-colors">
                  +92 340 3004439
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-pink-500/20 transition-all">
                <MapPin className="text-pink-400 w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Location</p>
                <p className="text-white">Karachi, Pakistan</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.form 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase ml-1">Name</label>
              <input 
              onChange={(e)=> setName(e.target.value)}
                type="text" 
                placeholder="Your Name" 
                className="w-full px-5 py-4 mt-2 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-purple-500/50 transition-all placeholder:text-gray-600"
                value={name}
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase ml-1">Email</label>
              <input 
              onChange={(e)=> setEmail(e.target.value)}
                type="email" 
                placeholder="Your Email" 
                className="w-full px-5 py-4 mt-2 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-purple-500/50 transition-all placeholder:text-gray-600"
                value={email}
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase ml-1">Message</label>
              <textarea 
              onChange={(e)=> setMessage(e.target.value)}
                rows="4"
                placeholder="Your Message..." 
                className="w-full px-5 py-4 mt-2 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-purple-500/50 transition-all placeholder:text-gray-600 resize-none"
                value={message}
              ></textarea>
            </div>

            <button className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold rounded-xl flex items-center justify-center gap-3 transition-all transform active:scale-[0.98] shadow-lg shadow-purple-500/20 cursor-pointer"
            onClick={()=> {
                setName("")
                setEmail("")
                setMessage("")
            }}
            >
              Send Message <Send size={18} />
            </button>
          </motion.form>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;