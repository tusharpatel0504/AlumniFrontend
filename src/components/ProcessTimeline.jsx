import React from "react";
import { motion } from "framer-motion";
import {
  FaQuoteLeft,
  FaCheck,
  FaShieldAlt,
  FaCopy,
  FaCompressAlt,
  FaLink,
  FaLanguage,
  FaLightbulb,
} from "react-icons/fa";

const tools = [
  { id: "01", title: "Paraphraser", desc: "Refine and enhance text flow.", icon: <FaQuoteLeft /> },
  { id: "02", title: "Grammar", desc: "Eliminate syntax errors.", icon: <FaCheck /> },
  { id: "03", title: "AI Detector", desc: "Identify synthetic content.", icon: <FaShieldAlt /> },
  { id: "04", title: "Plagiarism", desc: "Ensure content originality.", icon: <FaCopy /> },
  { id: "05", title: "Summarizer", desc: "Condense complex documents.", icon: <FaCompressAlt /> },
  { id: "06", title: "Citations", desc: "Generate academic sources.", icon: <FaLink /> },
  { id: "07", title: "Translator", desc: "Bridge linguistic barriers.", icon: <FaLanguage /> },
  { id: "08", title: "AI Flow", desc: "Generative writing engine.", icon: <FaLightbulb /> },
];

const ToolCard = ({ tool, index }) => {
  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      className="relative h-[320px] flex flex-col p-10 cursor-pointer overflow-hidden border-r border-b border-white/5 group bg-[#080808]"
    >
      {/* Dynamic Radial Gradient Follower (The "Cool" Factor) */}
      <motion.div
        variants={{
          initial: { scale: 0, opacity: 0 },
          hover: { scale: 2, opacity: 0.4 },
        }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        className="absolute inset-0 z-0 bg-[#5A6E3A] rounded-full blur-[80px] pointer-events-none"
      />

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-500 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />

      <div className="relative z-10 h-full flex flex-col justify-between">
        <div>
          <header className="flex justify-between items-start mb-8">
            <span className="text-[10px] text-neutral-600 tracking-tighter uppercase">
               Module // {tool.id}
             </span>
             <div className="text-xl text-[#5A6E3A] group-hover:text-[#7A9E4A] group-hover:scale-110 transition-all duration-500">
               {tool.icon}
             </div>
          </header>

          <h3 className="text-2xl font-light text-neutral-200 mb-2 tracking-tight group-hover:text-white transition-colors">
            {tool.title}
          </h3>

          <p className="text-sm text-neutral-500 leading-relaxed max-w-[180px] group-hover:text-neutral-300 transition-colors">
            {tool.desc}
          </p>
        </div>

        {/* Professional Magnetic-style Button */}
        <div className="flex justify-between items-end">
            <motion.div
              variants={{
                initial: { x: -10, opacity: 0 },
                hover: { x: 0, opacity: 1 },
              }}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-sm group-hover:border-[#7A9E4A]/60 transition-colors"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white group-hover:text-[#7A9E4A] transition-colors"
              >
                <path
                  d="M3.5 11.5L11.5 3.5M11.5 3.5H5.5M11.5 3.5V9.5"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
            
            {/* Corner Decorative Element */}
            <div className="h-px w-0 group-hover:w-8 bg-[#7A9E4A]/40 transition-all duration-700" />
        </div>
      </div>
    </motion.div>
  );
};

const PlatformModules = () => {
  return (
    <section className="bg-black py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Modern Centered Header */}
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="h-[1px] w-8 bg-[#4A5E2A]/50" />
            <p className="text-[#4A5E2A] uppercase tracking-[0.4em] text-[10px] font-bold">
              Core Capabilities
            </p>
            <span className="h-[1px] w-8 bg-[#4A5E2A]/50" />
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-light text-white tracking-tighter leading-none mb-6">
            Everything you need, <br />
            <span className="italic text-neutral-500">all in one place.</span>
          </h2>
        </div>

        {/* Main Grid Interface */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/5">
          {tools.map((tool, index) => (
            <ToolCard key={tool.id} tool={tool} index={index} />
          ))}
        </div>

        {/* Refined CTA Section */}
        <div className="flex flex-col items-center mt-10">
          <motion.a
            href="#signup"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center gap-4 bg-white text-black px-10 py-5 rounded-full font-medium overflow-hidden transition-all shadow-[0_0_40px_rgba(34,197,94,0.2)]"
          >
            <div className="absolute inset-0 bg-[#4A5E2A] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative z-10 flex items-center gap-3 group-hover:text-black">
               Get Started for Free
               <span className="w-1.5 h-1.5 bg-black rounded-full animate-ping" />
            </span>
          </motion.a>
         
        </div>
      </div>
    </section>
  );
};

export default PlatformModules;