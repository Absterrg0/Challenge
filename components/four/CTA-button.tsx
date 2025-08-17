"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

interface HoverButtonProps {
  size?: "sm" | "md" | "lg"
  text?: string
}

const HoverButton = ({ size = "md", text = "Try Grok" }: HoverButtonProps) => {
  const sizeConfig = {
    sm: {
      padding: "px-4 py-1.5",
      textSize: "text-xs",
      cornerSize: { initial: 8, hover: 12 },
      innerCornerSize: { initial: 3, hover: 6 },
      iconSize: "h-3 w-3",
      cornerOffset: { outer: 0, inner: 0.5 },
    },
    md: {
      padding: "px-6 py-2",
      textSize: "text-sm",
      cornerSize: { initial: 12, hover: 16 },
      innerCornerSize: { initial: 4, hover: 8 },
      iconSize: "h-4 w-4",
      cornerOffset: { outer: 0, inner: 1 },
    },
    lg: {
      padding: "px-8 py-3",
      textSize: "text-base",
      cornerSize: { initial: 16, hover: 20 },
      innerCornerSize: { initial: 6, hover: 10 },
      iconSize: "h-5 w-5",
      cornerOffset: { outer: 0, inner: 1 },
    },
  }

  const config = sizeConfig[size]

  return (
    <motion.button
      className={`group relative bg-transparent text-white font-semibold ${config.padding} ${config.textSize} overflow-hidden`}
      whileTap={{ scale: 0.95 }}
      whileHover="hover"
      variants={{
        hover: { y: -2 },
      }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      {/* Minimal geometric corners that expand on hover */}
      <motion.div
        className="absolute top-0 left-0 border-l-2 border-t-2 border-cyan-400"
        initial={{ width: config.cornerSize.initial, height: config.cornerSize.initial }}
        variants={{
          hover: {
            width: config.cornerSize.hover,
            height: config.cornerSize.hover,
            borderColor: "rgb(103, 232, 212)",
          },
        }}
        transition={{ duration: 0.5 }}
      />
      <motion.div
        className="absolute top-0 right-0 border-r-2 border-t-2 border-pink-400"
        initial={{ width: config.cornerSize.initial, height: config.cornerSize.initial }}
        variants={{
          hover: {
            width: config.cornerSize.hover,
            height: config.cornerSize.hover,
            borderColor: "rgb(244, 114, 182)",
          },
        }}
        transition={{ duration: 0.5 }}
      />
      <motion.div
        className="absolute bottom-0 left-0 border-l-2 border-b-2 border-green-400"
        initial={{ width: config.cornerSize.initial, height: config.cornerSize.initial }}
        variants={{
          hover: {
            width: config.cornerSize.hover,
            height: config.cornerSize.hover,
            borderColor: "rgb(74, 222, 128)",
          },
        }}
        transition={{ duration: 0.5 }}
      />
      <motion.div
        className="absolute bottom-0 right-0 border-r-2 border-b-2 border-purple-400"
        initial={{ width: config.cornerSize.initial, height: config.cornerSize.initial }}
        variants={{
          hover: {
            width: config.cornerSize.hover,
            height: config.cornerSize.hover,
            borderColor: "rgb(196, 181, 253)",
          },
        }}
        transition={{ duration: 0.5 }}
      />

      {/* Inner accent corners for depth */}
      <motion.div
        className={`absolute border-l border-t border-cyan-300/50`}
        style={{ top: config.cornerOffset.inner * 4, left: config.cornerOffset.inner * 4 }}
        initial={{ width: config.innerCornerSize.initial, height: config.innerCornerSize.initial }}
        variants={{
          hover: {
            width: config.innerCornerSize.hover,
            height: config.innerCornerSize.hover,
            borderColor: "rgb(165, 243, 252)",
          },
        }}
        transition={{ duration: 0.5 }}
      />
      <motion.div
        className={`absolute border-r border-t border-pink-300/50`}
        style={{ top: config.cornerOffset.inner * 4, right: config.cornerOffset.inner * 4 }}
        initial={{ width: config.innerCornerSize.initial, height: config.innerCornerSize.initial }}
        variants={{
          hover: {
            width: config.innerCornerSize.hover,
            height: config.innerCornerSize.hover,
            borderColor: "rgb(249, 168, 212)",
          },
        }}
        transition={{ duration: 0.5 }}
      />
      <motion.div
        className={`absolute border-l border-b border-green-300/50`}
        style={{ bottom: config.cornerOffset.inner * 4, left: config.cornerOffset.inner * 4 }}
        initial={{ width: config.innerCornerSize.initial, height: config.innerCornerSize.initial }}
        variants={{
          hover: {
            width: config.innerCornerSize.hover,
            height: config.innerCornerSize.hover,
            borderColor: "rgb(134, 239, 172)",
          },
        }}
        transition={{ duration: 0.5 }}
      />
      <motion.div
        className={`absolute border-r border-b border-purple-300/50`}
        style={{ bottom: config.cornerOffset.inner * 4, right: config.cornerOffset.inner * 4 }}
        initial={{ width: config.innerCornerSize.initial, height: config.innerCornerSize.initial }}
        variants={{
          hover: {
            width: config.innerCornerSize.hover,
            height: config.innerCornerSize.hover,
            borderColor: "rgb(216, 180, 254)",
          },
        }}
        transition={{ duration: 0.5 }}
      />

      <motion.span className="relative flex items-center gap-2 z-10 tracking-wide">
        {text}
        <motion.div
          variants={{
            hover: { x: 4, color: "rgb(103, 232, 212)" },
          }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          <ArrowRight className={config.iconSize} />
        </motion.div>
      </motion.span>
    </motion.button>
  )
}

export default HoverButton
