"use client"
import { useState, useEffect } from "react"
import {  Menu, X } from "lucide-react"
import Image from "next/image"
import { motion, AnimatePresence, useScroll, Variants } from "motion/react"
import HoverButton from "./CTA-button"
 
export default function EnhancedGrokLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [mounted, setMounted] = useState(false)
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => setScrollY(window.scrollY)
    const handleMouseMove = (e: globalThis.MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const navItems = ["API", "COMPANY", "CAREERS", "NEWS"]

  const handleScroll = (id:string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const headerVariants:Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const navItemVariants:Variants = {
    hidden: { opacity: 0, y: 8 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05 + 0.1,
        duration: 0.2,
        ease: "easeOut",
      },
    }),
  }

  const heroVariants:Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: delay * 0.1 + 0.15,
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  }

  const mobileMenuVariants:Variants = {
    hidden: {
      opacity: 0,
      y: -20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  }

  const mobileNavItemVariants:Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Base layer - dark background */}
      <div className="fixed inset-0 bg-black"></div>

      <div className="fixed inset-0">
        {/* Primary vibrant background */}
        <div className="absolute inset-0 opacity-25 bg-primary-vibrant" />

        {/* Enhanced navbar area background flow */}
        <div className="absolute top-0 left-0 right-0 h-80 opacity-30 bg-navbar-flow" />

        {/* Corner emphasis backgrounds */}

        <div className="absolute bottom-0 left-0 right-0 h-80 opacity-10 bg-bottom-glow" />
      </div>

      {/* Static noise texture overlay */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-noise-primary-enhanced" />
        <div className="absolute inset-0 opacity-12 mix-blend-soft-light bg-noise-secondary-enhanced" />
      </div>

      <div className="absolute inset-0">
        {/* Main grid with increased visibility */}
        <div className="absolute inset-0 opacity-15 bg-grid-enhanced" />

        {/* Secondary smaller grid with corner emphasis */}
        <div className="absolute inset-0 opacity-10 bg-grid-secondary-enhanced" />

        <div className="absolute inset-0 opacity-8 bg-grid-dots-enhanced" />
      </div>

      <motion.div
        className="fixed pointer-events-none opacity-5 w-96 h-96 rounded-full mouse-glow"
        animate={{
          left: mousePos.x - 192,
          top: mousePos.y - 192,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
          mass: 0.8,
        }}
      />

      <motion.header
        className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-4xl px-4"
        variants={headerVariants}
        initial="hidden"
        animate={mounted ? "visible" : "hidden"}
      >
        <div className="relative">
          <motion.div
            className="relative rounded-2xl overflow-hidden bg-black/60 backdrop-blur-xl border border-white/10 shadow-2xl"
            whileHover={{
              borderColor: "rgba(255, 255, 255, 0.2)",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {/* Subtle top highlight */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

            {/* Content layer */}
            <div className="relative px-8 py-4">
          <div className="flex items-center justify-between">
                <motion.div
                  className="flex items-center space-x-3 cursor-pointer group"
                  onClick={() => handleScroll("hero")}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <motion.div whileHover={{ filter: "brightness(1.2)" }} transition={{ duration: 0.3 }}>
                    <Image src="/grok.png" alt="grok" width={50} height={50} className="invert" />
                  </motion.div>
                </motion.div>

                <nav className="hidden md:flex items-center space-x-4">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item}
                      className="text-white/60 hover:text-white font-medium text-xs px-4 py-2 rounded-xl hover:bg-white/5 relative group"
                      variants={navItemVariants}
                      initial="hidden"
                      animate={mounted ? "visible" : "hidden"}
                      custom={index}
                      whileHover={{
                        color: "rgba(255, 255, 255, 1)",
                      }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                      <span className="relative z-10">{item}</span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-purple-500/0 rounded-xl"
                        whileHover={{
                          background: "linear-gradient(to right, rgba(6, 182, 212, 0.1), rgba(168, 85, 247, 0.1))",
                        }}
                        transition={{ duration: 0.5 }}
                      />
                      <motion.div
                        className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
                        whileHover={{
                          width: 32,
                          x: -16,
                        }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      />
                    </motion.button>
                  ))}
                </nav>

                <div className="flex items-center space-x-3">
                  <HoverButton size="md" text="Try Grok"></HoverButton>

                  <motion.button
                    className="md:hidden text-white/70 hover:text-white p-2 rounded-lg hover:bg-white/10"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <motion.div
                      animate={{ rotate: isMenuOpen ? 90 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                    </motion.div>
                  </motion.button>
                </div>
              </div>
            </div>
            
            {/* Subtle bottom shadow */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/30 to-transparent"></div>
          </motion.div>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                className="md:hidden absolute top-full left-0 right-0 mt-2"
                variants={mobileMenuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <motion.div
                  className="bg-black/60 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl p-4"
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item}
                      className="block w-full text-left text-white/60 hover:text-white py-3 px-4 rounded-xl hover:bg-white/5 text-sm font-medium"
                      variants={mobileNavItemVariants}
                      whileHover={{
                        x: 8,
                        color: "rgba(255, 255, 255, 1)",
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                      }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                      {item}
                    </motion.button>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      <main id="hero" className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="text-center mb-20">
          <motion.div
            className="relative inline-flex items-center px-6 py-3 rounded-full text-white/70 text-sm mb-12 group hover:border-cyan-400/25"
            variants={heroVariants}
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
            custom={1.5}
            whileHover={{
              borderColor: "rgba(34, 211, 238, 0.25)",
            }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            {/* Enhanced corner borders with colors */}
            <motion.div
              className="absolute top-0 left-0 border-l-2 border-t-2 border-cyan-400/40"
              initial={{ width: 24, height: 12 }}
              whileHover={{ borderColor: "rgba(34, 211, 238, 0.7)" }}
              transition={{ duration: 0.5 }}
            />
            <motion.div
              className="absolute top-0 right-0 border-r-2 border-t-2 border-pink-400/40"
              initial={{ width: 12, height: 12 }}
              whileHover={{ borderColor: "rgba(236, 72, 153, 0.7)" }}
              transition={{ duration: 0.5 }}
            />
            <motion.div
              className="absolute bottom-0 left-0 border-l-2 border-b-2 border-green-400/40"
              initial={{ width: 12, height: 12 }}
              whileHover={{ borderColor: "rgba(34, 197, 94, 0.7)" }}
              transition={{ duration: 0.5 }}
            />
            <motion.div
              className="absolute bottom-0 right-0 border-r-2 border-b-2 border-purple-400/40"
              initial={{ width: 24, height: 12 }}
              whileHover={{ borderColor: "rgba(168, 85, 247, 0.7)" }}
              transition={{ duration: 0.5 }}
            />

            <div className="flex items-center space-x-3 relative z-10">
              <motion.span
                className="font-medium"
                whileHover={{ color: "rgba(255, 255, 255, 1)" }}
                transition={{ duration: 0.5 }}
              >
                Created by
              </motion.span>
              <motion.div
                className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-white/25 shadow-lg"
                whileHover={{
                  borderColor: "rgba(255, 255, 255, 0.5)",
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
                }}
                transition={{ duration: 0.5 }}
              >
                <motion.div whileHover={{ filter: "brightness(1.1)" }} transition={{ duration: 0.5 }}>
                  <Image src="/avatar.jpg" alt="avatar" width={32} height={32} className="rounded-full" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight text-white relative">
            <motion.span
              className="relative inline-block"
              variants={heroVariants}
              initial="hidden"
              animate={mounted ? "visible" : "hidden"}
              custom={2.5}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20 blur-2xl"></span>
              <span className="relative bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
                Your AI That
              </span>
            </motion.span>
            <br />
            <motion.span
              className="relative inline-block"
              variants={heroVariants}
              initial="hidden"
              animate={mounted ? "visible" : "hidden"}
              custom={3.5}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-purple-400/15 via-cyan-400/15 to-green-400/15 blur-2xl"></span>
              <span className="relative bg-gradient-to-r from-gray-200 via-white to-gray-300 bg-clip-text text-transparent drop-shadow-2xl">
            Actually Gets You
              </span>
            </motion.span>
          </h1>
          
          <motion.p
            className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed relative"
            variants={heroVariants}
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
            custom={4.5}
          >
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-white/5 blur-xl rounded-lg"></span>
              <span className="relative font-medium tracking-wide">
            Smart, fast, and a little witty - Grok turns everyday questions into clear answers, 
                <br className="hidden sm:block" />
                right inside your dashboard with unprecedented intelligence.
              </span>
            </span>
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
            variants={heroVariants}
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
            custom={5.5}
          >
            <HoverButton size="lg" text="Grok Now"></HoverButton>
          </motion.div>
        </div>

        <motion.div
          className="relative"
          variants={heroVariants}
          initial="hidden"
          animate={mounted ? "visible" : "hidden"}
          custom={6.5}
        >
          {/* Diagonal pattern wrapper with created by component colors */}
          <motion.div
            className="relative p-8 group"
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              duration: 0.7,
            }}
          >
            {/* Diagonal pattern background */}
            <div className="absolute inset-0 opacity-40 bg-diagonal-pattern transition-all duration-700 group-hover:opacity-50" />

            <motion.div
              className="absolute top-0 left-0 border-l-2 border-t-2 border-cyan-400/60"
              initial={{ width: 80, height: 64 }}
              whileHover={{
                width: 96,
                height: 80,
                borderColor: "rgba(34, 211, 238, 0.8)",
              }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            />
            <motion.div
              className="absolute top-0 right-0 border-r-2 border-t-2 border-pink-400/60"
              initial={{ width: 64, height: 64 }}
              whileHover={{
                width: 80,
                height: 80,
                borderColor: "rgba(236, 72, 153, 0.8)",
              }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            />
            <motion.div
              className="absolute bottom-0 left-0 border-l-2 border-b-2 border-green-400/60"
              initial={{ width: 64, height: 64 }}
              whileHover={{
                width: 80,
                height: 80,
                borderColor: "rgba(34, 197, 94, 0.8)",
              }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            />
            <motion.div
              className="absolute bottom-0 right-0 border-r-2 border-b-2 border-purple-400/60"
              initial={{ width: 64, height: 64 }}
              whileHover={{
                width: 80,
                height: 80,
                borderColor: "rgba(168, 85, 247, 0.8)",
              }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            />

            {/* Multi-layered ambient glow system - reduced opacity */}
            <motion.div
              className="absolute -inset-8 rounded-3xl glow-multi-layer-outer"
              whileHover={{ opacity: 0.8 }}
              transition={{ duration: 0.7 }}
            />
            <motion.div
              className="absolute -inset-4 rounded-2xl glow-multi-layer-inner"
              whileHover={{ opacity: 0.9 }}
              transition={{ duration: 0.7 }}
            />

            {/* Premium outer border system - reduced opacity */}
            <motion.div
              className="absolute -inset-2 rounded-2xl glow-border-outer"
              whileHover={{ opacity: 0.8 }}
              transition={{ duration: 0.7 }}
            />
            <motion.div
              className="absolute -inset-1 rounded-2xl glow-border-inner"
              whileHover={{ opacity: 0.9 }}
              transition={{ duration: 0.7 }}
            />

            <motion.div
              className="relative bg-black/80 border border-white/20 rounded-2xl p-3 shadow-2xl shadow-black/40 overflow-hidden"
              whileHover={{
                borderColor: "rgba(255, 255, 255, 0.3)",
                boxShadow: "0 35px 60px -12px rgba(0, 0, 0, 0.6)",
              }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="absolute inset-0 opacity-50 bg-diagonal-inner transition-all duration-700 group-hover:opacity-60" />

              {/* Premium inner container for the image */}
              <motion.div
                className="relative bg-black/90 rounded-xl border border-white/15 min-h-[600px] flex items-center justify-center overflow-hidden shadow-inner shadow-black/30"
                whileHover={{
                  borderColor: "rgba(255, 255, 255, 0.25)",
                }}
                transition={{ duration: 0.7 }}
              >
                <div className="absolute inset-0 opacity-60 bg-diagonal-innermost transition-all duration-700 group-hover:opacity-70" />

                <motion.div whileHover={{ filter: "brightness(1.1)" }} transition={{ duration: 0.7 }}>
                  <Image
                    src="/grok-dash.png"
                    alt="grok dashboard"
                    width={1200}
                    height={600}
                    className="rounded-lg invert shadow-2xl relative z-10"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  )
}
