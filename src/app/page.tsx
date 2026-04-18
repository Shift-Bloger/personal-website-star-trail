"use client";

import { motion, Variants } from "framer-motion";
import StarTrail from "@/components/StarTrail";
import { ArrowRight, Code2, Cpu, ExternalLink, Rocket, Sparkles, Terminal } from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

export default function Home() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <main className="relative min-h-screen bg-[#030712] text-slate-200 selection:bg-cyan-500/30 overflow-hidden">
      {/* 3D Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <StarTrail />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 h-screen overflow-y-auto pointer-events-auto scroll-smooth scrollbar-hide">
        
        {/* HERO SECTION */}
        <section className="min-h-[80vh] flex flex-col justify-center">
          <motion.div
            initial="visible"
            animate="visible"
            variants={containerVariants}
            className="max-w-4xl"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-cyan-400" />
              <span className="text-cyan-400 font-mono tracking-widest text-sm uppercase">System Initialized</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
              <span className="block text-white">Hi, I'm</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-glow">
                A Visionary Developer
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg sm:text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed">
              Exploring the frontiers of digital experiences. Building scalable, performant, and hyper-aesthetic web applications.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <button className="group relative px-6 py-3 rounded-full bg-cyan-500/10 border border-cyan-500/50 hover:bg-cyan-500/20 text-cyan-300 font-medium transition-all flex items-center gap-2 box-glow">
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group relative px-6 py-3 rounded-full bg-slate-800/50 border border-slate-700 hover:bg-slate-800 text-slate-300 font-medium transition-all flex items-center gap-2">
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </button>
            </motion.div>
          </motion.div>
        </section>

        {/* PROJECTS SECTION */}
        <section className="py-24 border-t border-slate-800/50">
          <motion.div
            initial="visible"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-16">
              <Code2 className="text-cyan-400 w-8 h-8" />
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Open Source Projects</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Nexus Framework", desc: "A next-gen React meta-framework optimized for edge computing and instant HMR.", tech: ["React", "Rust", "Edge"] },
                { title: "Aether UI", desc: "Headless UI components with futuristic aesthetics and uncompromised accessibility.", tech: ["Tailwind", "Framer Motion", "Radix"] }
              ].map((project, i) => (
                <motion.div key={i} variants={itemVariants} className="glass-panel p-8 rounded-2xl group hover:border-cyan-500/30 transition-colors relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-3 flex items-center justify-between">
                      {project.title}
                      <ExternalLink className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                    </h3>
                    <p className="text-slate-400 mb-6">{project.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t, j) => (
                        <span key={j} className="text-xs font-mono px-2 py-1 rounded bg-slate-800/80 text-cyan-300 border border-slate-700/50">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* PRODUCTS SECTION */}
        <section className="py-24 border-t border-slate-800/50">
          <motion.div
            initial="visible"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-16">
              <Rocket className="text-purple-400 w-8 h-8" />
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Commercial Products</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Quantum Analytics", icon: <Terminal className="w-6 h-6 text-purple-400" />, desc: "Real-time AI-powered analytics dashboard for enterprise." },
                { title: "Starlight CMS", icon: <Sparkles className="w-6 h-6 text-cyan-400" />, desc: "A heavily optimized headless CMS with collaborative editing." },
                { title: "Neuro Sync", icon: <Cpu className="w-6 h-6 text-blue-400" />, desc: "Distributed state management for high-frequency trading platforms." }
              ].map((prod, i) => (
                <motion.div key={i} variants={itemVariants} className="glass-panel p-6 rounded-2xl group hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-12 h-12 rounded-full bg-slate-800/80 flex items-center justify-center mb-6 border border-slate-700 group-hover:border-purple-500/50 transition-colors">
                    {prod.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{prod.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{prod.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* FOOTER */}
        <footer className="py-12 border-t border-slate-800/50 mt-24 text-center">
          <p className="text-slate-500 text-sm font-mono">
            © {new Date().getFullYear()} Visionary Developer. Systems operating normally.
          </p>
        </footer>
      </div>
    </main>
  );
}