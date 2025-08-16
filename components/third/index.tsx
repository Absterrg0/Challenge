"use client"
import { Clock, Copy, PlusCircle, Zap, Github, Linkedin, Mail } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function EnhancedProfileCard() {
  const [isHovered, setIsHovered] = useState(false)
  const [currentCard, setCurrentCard] = useState(0)

  const cardTexts = ["Projects", "Currently building Okito", "Portfolio"]

  const handleHover = () => {
    setIsHovered(true)
  }

  const handleLeave = () => {
    setIsHovered(false)
  }

  return (
    <div className="bg-gray-950 flex items-center justify-center min-h-screen w-full p-8">
      <div className="relative" onMouseEnter={handleHover} onMouseLeave={handleLeave}>
        {/* Background Cards - Keep Glass Effect */}
        <div
          className="absolute inset-0 right-20 -top-3 h-32 w-80 p-8 rounded-3xl backdrop-blur-xl bg-gradient-to-br from-emerald-500/20 via-emerald-400/15 to-emerald-600/20 border border-emerald-400/30 shadow-[0_8px_32px_rgba(16,185,129,0.15),0_0_0_1px_rgba(16,185,129,0.1),inset_0_1px_0_rgba(255,255,255,0.1)]"
          style={{
            transform: isHovered
              ? "rotate(8deg) translateY(-4px) scale(1.02)"
              : "rotate(0deg) translateY(0px) scale(0.98)",
            opacity: isHovered ? 1 : 0,
            transition: "all 0.7s cubic-bezier(0.23, 1, 0.32, 1)",
            transitionDelay: "0.2s",
          }}
        >
          <div className="absolute top-4 left-4 text-xs font-semibold text-emerald-100 drop-shadow-sm">
            {cardTexts[2]}
          </div>
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-400/10 to-transparent" />
        </div>

        {/* Card 1 - Keep Glass Layer */}
        <div
          className="absolute inset-0 -top-5 left-16 h-32 w-80 p-8 rounded-3xl backdrop-blur-xl bg-gradient-to-br from-indigo-500/20 via-indigo-600/15 to-indigo-700/20 border border-indigo-400/30 shadow-[0_8px_32px_rgba(99,102,241,0.15),0_0_0_1px_rgba(99,102,241,0.1),inset_0_1px_0_rgba(255,255,255,0.1)]"
          style={{
            transform: isHovered
              ? "rotate(-8deg) translateY(0px) scale(1.02)"
              : "rotate(0deg) translateY(8px) scale(0.98)",
            opacity: isHovered ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
          }}
        >
          <div className="absolute top-4 right-4 text-xs font-semibold text-indigo-100 drop-shadow-sm">
            {cardTexts[0]}
          </div>
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-400/10 to-transparent" />
        </div>

         <div className="relative">
           {/* Background White Card - Extends when hovered */}
           <div 
             className="absolute inset-0 bg-white rounded-3xl border border-gray-200/60 shadow-[0_25px_60px_rgba(0,0,0,0.25)] transition-all duration-600 ease-[0.23,1,0.32,1]"
             style={{
               height: isHovered ? "310px" : "240px",
               transform: isHovered ? "translateY(0)" : "translateY(0)",
               opacity: isHovered ? 1 : 0.3,
             }}
           >
             {/* Extended Content on White Background */}
             {isHovered && (
               <motion.div
                 className="absolute bottom-0 left-0 right-0 p-3 flex items-center justify-between"
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{
                   duration: 0.5,
                   delay: 0.2,
                   ease: [0.23, 1, 0.32, 1],
                 }}
               >
                 {/* Current Project Section */}
                 <motion.div
                   className="flex items-center gap-3 px-4 py-2 rounded-full bg-gray-100 border-2 border-gray-300/70 shadow-[0_4px_12px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.9)] transition-all duration-300"
                   initial={{ scale: 0.9, opacity: 0 }}
                   animate={{ scale: 1, opacity: 1 }}
                   transition={{
                     duration: 0.4,
                     delay: 0.3,
                     ease: [0.23, 1, 0.32, 1],
                   }}
                 >
                   <motion.div
                     initial={{ rotate: 0 }}
                     animate={{ rotate: [0, -10, 10, 0] }}
                     transition={{
                       duration: 0.8,
                       delay: 0.5,
                       ease: "easeInOut",
                     }}
                   >
                     <Zap size={16} className="text-yellow-500" />
                   </motion.div>
                   <span className="text-gray-800 font-semibold text-sm">Cooking up Okito</span>
                 </motion.div>

                 {/* Social Links Section */}
                 <motion.div
                   className="flex gap-2"
                   initial={{ y: 10, opacity: 0 }}
                   animate={{ y: 0, opacity: 1 }}
                   transition={{
                     duration: 0.4,
                     delay: 0.4,
                     ease: [0.23, 1, 0.32, 1],
                   }}
                 >
                   {[
                     { icon: Github, color: "hover:bg-gray-700 hover:text-white", label: "GitHub" },
                     { icon: Linkedin, color: "hover:bg-blue-600 hover:text-white", label: "LinkedIn" },
                     { icon: Mail, color: "hover:bg-red-600 hover:text-white", label: "Email" },
                   ].map((social, index) => (
                     <motion.button
                       key={social.label}
                       className={`w-10 h-10 rounded-full text-gray-600 transition-all duration-300 ${social.color} flex items-center justify-center hover:scale-110 active:scale-95 bg-gray-100 border-2 border-gray-300/70 shadow-[0_4px_12px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.9)]`}
                       initial={{ scale: 0, opacity: 0 }}
                       animate={{ scale: 1, opacity: 1 }}
                       transition={{
                         delay: 0.5 + index * 0.1,
                         duration: 0.3,
                         ease: [0.23, 1, 0.32, 1],
                       }}
                       whileHover={{ scale: 1.1 }}
                       whileTap={{ scale: 0.95 }}
                     >
                       <social.icon size={16} />
                     </motion.button>
                   ))}
                 </motion.div>
               </motion.div>
             )}
           </div>

           {/* Front Dark Card - Stays on top */}
           <div className="relative w-96 p-8 overflow-hidden rounded-3xl z-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 border-2 border-slate-700/50 shadow-[0_20px_40px_rgba(0,0,0,0.7),0_8px_20px_rgba(0,0,0,0.5),inset_0_2px_0_rgba(255,255,255,0.1),inset_0_-2px_0_rgba(0,0,0,0.8),inset_2px_0_0_rgba(255,255,255,0.05),inset_-2px_0_0_rgba(0,0,0,0.5)] transition-all duration-500">
             <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-black/20 pointer-events-none" />
             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent pointer-events-none" />

             <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent shadow-[0_0_20px_rgba(34,211,238,0.4)]" />

             <div className="relative z-10">
               <div className="flex w-full justify-between">
                 <div className="flex items-center gap-3">
                   <div className="rounded-full w-2 h-2 bg-emerald-500 shadow-[0_0_12px_#10b981] transition-all duration-300" />
                   <div className="text-sm font-medium text-emerald-400 transition-all duration-300">
                     Available for work
                   </div>
                 </div>
                 <div className="flex items-center gap-2">
                   <div className="text-sky-400 transition-colors duration-300">
                     <Clock size={16}></Clock>
                   </div>
                   <div className="text-sm font-medium text-sky-400 transition-colors duration-300">7:15 PM</div>
                 </div>
               </div>
               <div className="mt-6 flex gap-6 items-center">
                 <div className="rounded-full">
                   <div className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl bg-gradient-to-br from-amber-600 via-orange-600 to-red-600 shadow-[0_10px_25px_rgba(0,0,0,0.7),inset_0_2px_0_rgba(255,255,255,0.1),inset_0_-2px_0_rgba(0,0,0,0.5)] text-shadow-[0_2px_4px_rgba(0,0,0,0.5)] transition-all duration-300">
                     <Image
                       src={"/avatar.jpg"}
                       alt="avatar"
                       width={60}
                       height={60}
                       className="rounded-full"
                     />
                   </div>
                 </div>
                 <div>
                   <div className="text-lg font-semibold text-white transition-colors duration-300">Abby</div>
                   <div className="text-sm text-slate-400">Engineer (Self proclaimed)</div>
                 </div>
               </div>
               <div className="mt-6 flex gap-3 text-center items-center text-sm">
                 <button className="w-full p-3 rounded-2xl flex gap-2 justify-center items-center text-white bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-500 shadow-[0_4px_16px_rgba(16,185,129,0.3),inset_0_1px_0_rgba(255,255,255,0.08)] border border-emerald-500/20 transition-all duration-300 group/button focus:outline-none focus:ring-2 focus:ring-emerald-400/50">
                   <div className="group-hover/button:scale-110 transition-all duration-300 bg-white/10 rounded-full p-1">
                     <PlusCircle size={14}></PlusCircle>
                   </div>
                   <div className="font-medium tracking-wide">Hire Me</div>
                 </button>
                 <button className="w-full p-3 rounded-2xl flex gap-2 justify-center items-center text-white bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 shadow-[0_4px_16px_rgba(59,130,246,0.3),inset_0_1px_0_rgba(255,255,255,0.08)] border border-blue-500/20 transition-all duration-300 group/button focus:outline-none focus:ring-2 focus:ring-blue-400/50">
                   <div className="group-hover/button:scale-110 transition-all duration-300 bg-white/10 rounded-full p-1">
                     <Copy size={14}></Copy>
                   </div>
                   <div className="font-medium tracking-wide">Copy Email</div>
                 </button>
               </div>
             </div>
           </div>
         </div>
      </div>
    </div>
  )
}
