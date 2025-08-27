"use client"

import { useState, useEffect } from "react"
import { Wifi, Signal, Zap, Music, Coffee, Plus, Code, Star, Github, ExternalLink, Layers } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"
import Image from "next/image"
import { Variants } from "motion/react"

export default function ExpandableDashboard() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())
  const batteryLevel = 67

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const containerVariants:Variants = {
    collapsed: {
      transition: {
        staggerChildren: 0.06,
        staggerDirection: -1,
        when: "afterChildren",
        duration: 0.8,
      },
    },
    expanded: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants:Variants = {
    collapsed: {
      opacity: 0,
      scale: 0.85,
      rotateY: 45,
      transition: {
        duration: 0.7,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    expanded: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  const floatingVariants:Variants = {
    animate: {
      y: [0, -8, 0],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  const pulseVariants:Variants = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  const statusVariants:Variants = {
    collapsed: { ...itemVariants.collapsed, x: -180, y: -60 },
    expanded: { ...itemVariants.expanded, x: 0, y: 0 },
  }

  const portfolioVariants:Variants = {
    collapsed: { ...itemVariants.collapsed, x: -220, y: 100 },
    expanded: { ...itemVariants.expanded, x: 0, y: 0 },
  }

  const musicVariants:Variants = {
    collapsed: { ...itemVariants.collapsed, x: 130, y: 100 },
    expanded: { ...itemVariants.expanded, x: 0, y: 0 },
  }

  const quickActionsVariants:Variants = {
    collapsed: { ...itemVariants.collapsed, x: -220, y: 220 },
    expanded: { ...itemVariants.expanded, x: 0, y: 0 },
  }

  const cookingVariants:Variants = {
    collapsed: { ...itemVariants.collapsed, x: -40, y: 220 },
    expanded: { ...itemVariants.expanded, x: 0, y: 0 },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-950 to-black p-8 flex items-center justify-center">
      <motion.div
        className="relative flex flex-col items-center"
        variants={containerVariants}
        initial="collapsed"
        animate={isExpanded ? "expanded" : "collapsed"}
      >
        {/* Top Row - System Status Widget */}
        <div className="flex items-start justify-center mb-4 w-full">
          <AnimatePresence mode="wait">
            {isExpanded && (
              <motion.div
                variants={statusVariants}
                className="bg-gradient-to-br from-emerald-500/30 via-teal-400/20 to-cyan-500/25 backdrop-blur-2xl rounded-3xl p-6 shadow-2xl border border-emerald-400/40 relative overflow-hidden mr-4"
                style={{ width: "420px" }}
                layout
                whileHover={{ y: -4 }}
                exit={{
                  opacity: 0,
                  scale: 0.8,
                  x: -180,
                  y: -60,
                  rotateY: 45,
                  transition: {
                    duration: 0.5,
                    ease: [0.4, 0, 0.2, 1]
                  }
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-emerald-400/[0.15] to-cyan-400/[0.08] rounded-3xl"
                  animate={{ opacity: [0.1, 0.2, 0.1] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-emerald-100 text-sm font-medium">System Overview</span>
                    <motion.div className="flex gap-2" variants={pulseVariants} animate="animate">
                      <Wifi className="w-4 h-4 text-emerald-300" />
                      <Signal className="w-4 h-4 text-teal-300" />
                      <Zap className="w-4 h-4 text-cyan-300" />
                    </motion.div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="text-2xl font-light text-white">
                        {currentTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      </div>
                      <div className="text-emerald-200 text-sm">
                        {currentTime.toLocaleDateString([], { weekday: "short", month: "short", day: "numeric" })}
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <span className="text-emerald-200 text-sm font-medium">{batteryLevel}%</span>
                      </div>
                      <div className="w-8 h-4 bg-slate-800/60 rounded-full overflow-hidden border border-emerald-400/40">
                        <motion.div
                          className="h-full bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${batteryLevel}%` }}
                          transition={{ duration: 2, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            className="bg-gradient-to-br from-violet-600/30 via-purple-500/25 to-fuchsia-600/30 backdrop-blur-2xl rounded-3xl p-4 shadow-2xl border border-violet-400/40 relative overflow-hidden flex items-center justify-center cursor-pointer"
            onClick={() => setIsExpanded(!isExpanded)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}

            layout
          >
            <div className="absolute inset-0 bg-gradient-to-br from-violet-400/[0.12] to-fuchsia-400/[0.06] rounded-3xl"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl border border-violet-400/40 flex items-center justify-center shadow-lg overflow-hidden">
                <Image
                  src="/avatar.jpg"
                  alt="User Avatar"
                  className="w-full h-full object-cover rounded-xl"
                  width={60}
                  height={50}
                  
                />
                <div
                  className="w-full h-full bg-gradient-to-br from-violet-500 via-purple-600 to-fuchsia-600 rounded-xl flex items-center justify-center"
                  style={{ display: "none" }}
                >
                  <span className="text-white font-bold text-lg">U</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Middle Row */}
        <div className="flex items-center justify-center gap-4 mb-4 w-full">
          <AnimatePresence mode="wait">
            {isExpanded && (
              <motion.div
                variants={portfolioVariants}
                className="bg-gradient-to-br from-indigo-600/40 via-purple-500/30 to-violet-600/35 backdrop-blur-2xl rounded-3xl p-6 shadow-2xl border border-indigo-400/50 relative overflow-hidden group"
                style={{ width: "280px", height: "200px" }}
                layout
                whileHover={{ y: -6 }}
                exit={{
                  opacity: 0,
                  scale: 0.8,
                  x: -220,
                  y: 100,
                  rotateY: 45,
                  transition: {
                    duration: 0.5,
                    ease: [0.4, 0, 0.2, 1]
                  }
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-indigo-400/[0.15] to-violet-400/[0.08] rounded-3xl"
                  animate={{ opacity: [0.1, 0.2, 0.1] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                />
                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                
                      <div>
                        <h3 className="text-lg font-semibold text-white">Portfolio</h3>
                        <p className="text-indigo-200 text-sm">Full-Stack Developer</p>
                      </div>
                    </div>
                    <motion.div
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                      className="text-violet-200"
                    >
                      <Layers className="w-6 h-6" />
                    </motion.div>
                  </div>

                  <div className="flex-1 space-y-4">
                    {/* Featured Project */}
                    <motion.div
                      className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm rounded-2xl p-4 border border-purple-300/20 hover:border-purple-300/40 transition-all cursor-pointer group/item relative overflow-hidden"
                      whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                    >
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-purple-400/20 to-transparent rounded-bl-full"></div>
                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            
                            <h4 className="text-white font-semibold text-sm">Okito</h4>
                            <p className="text-purple-200 text-xs mt-1">• Next.js  + TypeScript <br /> • Solana <br /> • Framer Motion</p>
                          </div>
                          <div className="flex gap-2 opacity-0 group-hover/item:opacity-100 transition-opacity">
                            <Github className="w-4 h-4 text-purple-300 hover:text-white cursor-pointer" />
                            <ExternalLink className="w-4 h-4 text-purple-300 hover:text-white cursor-pointer" />
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className="text-xs text-purple-300 bg-purple-500/20 px-2 py-1 rounded-full">2024</span>
                            <span className="text-xs text-indigo-300">⭐ 4.9</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Skills/Tech Stack */}
                    <div className="grid grid-cols-3 gap-2">
                      <motion.div
                        className="bg-white/5 backdrop-blur-sm rounded-xl p-2 border border-purple-300/20 text-center"
                        whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                      >
                        <div className="text-purple-300 text-xs font-medium">React</div>
                      </motion.div>
                      <motion.div
                        className="bg-white/5 backdrop-blur-sm rounded-xl p-2 border border-purple-300/20 text-center"
                        whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                      >
                        <div className="text-purple-300 text-xs font-medium">TypeScript</div>
                      </motion.div>
                      <motion.div
                        className="bg-white/5 backdrop-blur-sm rounded-xl p-2 border border-purple-300/20 text-center"
                        whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                      >
                        <div className="text-purple-300 text-xs font-medium">Next.js</div>
                      </motion.div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/15">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span className="text-indigo-200 text-sm font-medium">24</span>
                      </div>
                      <div className="w-px h-4 bg-white/20"></div>
                      <span className="text-indigo-300 text-xs">Projects Completed</span>
                    </div>
                    <motion.div
                      className="flex items-center gap-2 text-violet-300 hover:text-violet-200 transition-colors cursor-pointer"
                      whileHover={{ x: 2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <span className="text-sm font-medium">View All</span>
                      <ExternalLink className="w-4 h-4" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence mode="wait">
            {isExpanded && (
              <motion.div
                variants={musicVariants}
                className="bg-gradient-to-br from-pink-500/30 via-rose-400/20 to-red-500/25 backdrop-blur-2xl rounded-3xl p-6 shadow-2xl border border-pink-400/40 relative overflow-hidden"
                style={{ width: "240px", height: "200px" }}
                layout
                whileHover={{ y: -6 }}
                exit={{
                  opacity: 0,
                  scale: 0.8,
                  x: 130,
                  y: 100,
                  rotateY: 45,
                  transition: {
                    duration: 0.5,
                    ease: [0.4, 0, 0.2, 1]
                  }
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-pink-400/[0.12] to-red-400/[0.06] rounded-3xl"
                  animate={{ opacity: [0.12, 0.22, 0.12] }}
                  transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
                />
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center shadow-lg">
                        <Music className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex gap-2">
                        <motion.div
                          className="w-1 h-4 bg-pink-300 rounded-full"
                          animate={{ scaleY: [1, 1.5, 0.8, 1.2, 1] }}
                          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                        />
                        <motion.div
                          className="w-1 h-4 bg-rose-300 rounded-full"
                          animate={{ scaleY: [1, 0.8, 1.5, 1, 1.2] }}
                          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, delay: 0.1 }}
                        />
                        <motion.div
                          className="w-1 h-4 bg-red-300 rounded-full"
                          animate={{ scaleY: [1, 1.2, 1, 1.5, 0.8] }}
                          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, delay: 0.2 }}
                        />
                      </div>
                    </div>
                    <div className="mb-4">
                      <h3 className="text-lg font-medium text-white">Now Playing</h3>
                      <p className="text-pink-100 text-sm">Synthwave Vibes</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="w-full h-1 bg-slate-800/60 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-pink-400 to-rose-400 rounded-full"
                        animate={{ width: ["20%", "60%", "20%"] }}
                        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
                      />
                    </div>
                    <div className="flex justify-between text-xs text-pink-100">
                      <span>2:14</span>
                      <span>4:32</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom Row */}
        <div className="flex items-center justify-center gap-4 w-full">
          <AnimatePresence mode="wait">
            {isExpanded && (
              <motion.div
                variants={quickActionsVariants}
                className="bg-gradient-to-br from-indigo-500/30 via-blue-400/20 to-cyan-500/25 backdrop-blur-2xl rounded-3xl p-3 px-6 shadow-2xl border border-indigo-400/40 relative overflow-hidden flex items-center justify-center group cursor-pointer"
                whileHover={{ scale: 1.05, rotateZ: -3 }}
                layout
                exit={{
                  opacity: 0,
                  scale: 0.8,
                  x: -220,
                  y: 220,
                  rotateY: 45,
                  transition: {
                    duration: 0.5,
                    ease: [0.4, 0, 0.2, 1]
                  }
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-indigo-400/25 via-blue-400/15 to-cyan-400/10 rounded-3xl shadow-2xl border border-indigo-400/30 backdrop-blur-2xl"
                  animate={{ opacity: [0.15, 0.28, 0.15] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                />
                <div className="relative z-10 flex flex-col items-center justify-center">
                  <motion.div
                    className="w-12 h-12 flex items-center justify-center rounded-2xl bg-indigo-400/30 border border-indigo-400/40 shadow-lg backdrop-blur-lg transition-all"
                    whileHover={{ backgroundColor: "rgba(99, 102, 241, 0.4)" }}
                    whileTap={{ opacity: 0.8 }}
                  >
                    <Plus className="text-indigo-200" size={28} />
                  </motion.div>
                  <span className="mt-2 text-xs text-indigo-100 font-medium tracking-wide select-none">Add Widget</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence mode="wait">
            {isExpanded && (
              <motion.div
                variants={cookingVariants}
                className="bg-gradient-to-br from-lime-500/30 via-green-400/20 to-emerald-500/25 backdrop-blur-2xl rounded-3xl p-6 shadow-2xl border border-lime-400/40 relative overflow-hidden"
                style={{ width: "420px" }}
                layout
                whileHover={{ y: -4 }}
                exit={{
                  opacity: 0,
                  scale: 0.8,
                  x: -40,
                  y: 220,
                  rotateY: 45,
                  transition: {
                    duration: 0.5,
                    ease: [0.4, 0, 0.2, 1]
                  }
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-lime-400/[0.12] to-emerald-400/[0.06] rounded-3xl"
                  animate={{ opacity: [0.08, 0.16, 0.08] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                />
                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <motion.div
                        className="w-10 h-10 bg-gradient-to-br from-lime-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      >
                        <Coffee className="w-5 h-5 text-white" />
                      </motion.div>
                      <div>
                        <div className="text-lime-100 text-sm">Productivity</div>
                        <div className="flex items-center gap-2">
                          <span className="text-lime-200 text-xl font-medium">Focus Mode</span>
                          <motion.div
                            className="w-2 h-2 bg-lime-300 rounded-full"
                            animate={{ opacity: [1, 0.3, 1] }}
                            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lime-100 text-xs">Session</div>
                      <motion.div
                        className="text-lime-200 text-lg font-medium"
                        animate={{ scale: [1, 1.02, 1] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      >
                        25:00
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  )
}
