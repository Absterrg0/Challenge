"use client"

import Image from "next/image"
import Button from "./button"
import Envelope from "./envelope"
import { motion } from "framer-motion"

export default function FiveLanding() {
  return (
    <motion.div
      className="bg-stone-950 min-h-screen w-screen relative z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.06),transparent_60%)]"></div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.06),transparent_60%)]"></div>

      <motion.div
        className="bg-[#4ee11b]/60 blur-[120px] h-48 w-30 rounded-full fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 translate-y-0 -z-10"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="bg-[#4ee11b]/60 blur-[60px] h-48 w-30 rounded-full fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 translate-y-6 -z-10"
        animate={{
          y: [0, 20, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className="absolute top-[45%] left-[6%] z-10"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.3, ease: "easeOut" }}
      >
        <Button title="Spam Protection" />
      </motion.div>

      <motion.div
        className="absolute -rotate-6 top-[32%] mask-l-from-70% mask-l-to-95% left-0 w-full h-full opacity-90"
        initial={{ x: -200, opacity: 0, rotate: -20 }}
        animate={{ x: 0, opacity: 0.9, rotate: -6 }}
        transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
      >
        <Image
          src={"/mail-dash.jpeg"}
          alt="five"
          width={250}
          height={100}
          className="border border-1 transition-all duration-700 ease-out"
        />
      </motion.div>

      <motion.div
        className="absolute top-[50%] right-[8%] z-10"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.3, ease: "easeOut" }}
      >
        <Button title="Dash" />
      </motion.div>

      <motion.div
        className="absolute top-[55%] right-[25%] z-50"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.3, ease: "easeOut" }}
      >
        <Button title="AI Summary" />
      </motion.div>

      <motion.div
        className="absolute rotate-6 top-[52%] mask-r-from-70% mask-r-to-95% right-0 rounded-lg opacity-90"
        initial={{ x: 200, opacity: 0, rotate: 20 }}
        animate={{ x: 0, opacity: 0.9, rotate: 6 }}
        transition={{ delay: 0.6, duration: 0.4, ease: "easeOut" }}
      >
        <Image
          src={"/mail-dash.jpeg"}
          alt="five"
          width={250}
          height={100}
          className="border border-1 border-zinc-600 transition-all duration-700 ease-out"
        />
      </motion.div>

      <motion.div
        className="pt-12 px-12 pb-4 flex items-center justify-between"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div>
          <Image src="/sprrint.png" alt="five" width={160} height={100} />
        </div>
        <div>
          <Button title="Request Access" />
        </div>
      </motion.div>

      <motion.div
        className="text-center flex flex-col justify-center items-center gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.4 }}
      >
        <motion.div
          className="text-8xl font-medium leading-[1] tracking-tight text-gray-50"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
        >
          The Smarter Way to <br />
          Manage Emails
        </motion.div>
        <motion.div
          className="text-gray-100 text-xl"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.3, ease: "easeOut" }}
        >
          Auto-segmentation, smart filtering, AI auto-complete, and built-in CRM. <br />
          Stop wasting time on repetitive tasks.
        </motion.div>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.3, ease: "easeOut" }}
        >
          <motion.button
            className="px-6 bg-[#4ee11b] text-lg brightness-125 font-semibold rounded-full py-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            Request Access
          </motion.button>
          <div className="mt-2 font-light text-gray-50">Get 3 month free now</div>
        </motion.div>
      </motion.div>

      <motion.div
        className="relative mt-24 w-full flex justify-center items-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.4, ease: "easeOut" }}
      >
        <motion.div
          className="absolute top-8 left-1/2 -translate-x-1/2 z-10 scale-110 mask-b-from-40% mask-b-to-85% transition-all duration-1000 ease-out"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.3, ease: "easeOut" }}
        >
          <Envelope />
        </motion.div>

        <motion.div
          className="relative z-0 mask-b-from-25% mask-b-to-85% -top-20 transition-all duration-1000 ease-out"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative p-2 rounded-[2rem] bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5)] w-fit">
            <div className="absolute inset-0 rounded-[2rem] pointer-events-none">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            </div>
            <div className="relative rounded-[1.7rem] overflow-hidden bg-black/30 backdrop-blur-xl border border-white/10">
              <div className="w-[800px] h-[450px] overflow-hidden rounded-[1.7rem] relative">
                <Image
                  src="/mail-dash.jpeg"
                  alt="five"
                  width={800}
                  height={900}
                  className="w-full h-full object-cover object-top relative z-10"
                />
              </div>
              <div className="absolute inset-0 rounded-[1.7rem] pointer-events-none bg-[linear-gradient(120deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.04)_35%,transparent_50%,rgba(255,255,255,0.06)_75%,transparent_100%)]"></div>
              <div className="absolute inset-0 rounded-[1.7rem] ring-1 ring-white/10"></div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
