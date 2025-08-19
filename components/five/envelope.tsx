"use client"

import { motion } from "framer-motion"

export default function Envelope() {
  return (
    <div>
      <svg width="800" height="440" viewBox="0 0 4192 2345" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_i_131_72)">
          <motion.path
            d="M0 105.72C0 61.2073 50.1203 35.1328 86.5698 60.6829L2028.97 1422.25C2047.65 1435.34 2072.49 1435.54 2091.38 1422.75L4106.16 58.1412C4142.68 33.4047 4192 59.5684 4192 103.679V2289C4192 2319.38 4167.38 2344 4137 2344H55C24.6244 2344 0 2319.38 0 2289V105.72Z"
            fill="#322E2C"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          />
        </g>

        <motion.path
          d="M70 275.984C70 231.813 119.441 205.662 155.953 230.521L2030.77 1506.99C2049.19 1519.52 2073.35 1519.71 2091.96 1507.47L4036.77 228.067C4073.34 204.008 4122 230.24 4122 274.016V2289C4122 2319.38 4097.38 2344 4067 2344H125C94.6243 2344 70 2319.38 70 2289V275.984Z"
          fill="#2D2A28"
          stroke="white"
          strokeOpacity="0.4"
          strokeWidth="2"
          strokeDasharray="40 40"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.4, ease: "easeInOut" }}
        />

        <g filter="url(#filter1_i_131_72)">
          <motion.path
            d="M2021.15 1028.55C2041.42 1011.95 2070.58 1011.95 2090.85 1028.55L3090.47 1847.45C3130.44 1880.2 3107.29 1945 3055.62 1945H1056.38C1004.71 1945 981.556 1880.2 1021.53 1847.45L2021.15 1028.55Z"
            fill="#322E2C"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.7, ease: "easeInOut" }}
          />
        </g>

        <motion.path
          d="M2020.65 1087.54C2040.92 1070.94 2070.08 1070.94 2090.35 1087.54L2982.12 1817.95C3022.1 1850.69 2998.95 1915.5 2947.27 1915.5H1163.73C1112.05 1915.5 1088.9 1850.69 1128.88 1817.95L2020.65 1087.54Z"
          fill="#2D2A28"
          stroke="white"
          strokeOpacity="0.4"
          strokeWidth="2"
          strokeDasharray="40 40"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.3, delay: 1, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 1.3, ease: "easeOut" }}
        >
          <motion.div
            className="w-2 h-8 bg-white rounded-full"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.2, delay: 1.5, ease: "easeOut" }}
          />
        </motion.div>

        <defs>
          <filter
            id="filter0_i_131_72"
            x="0"
            y="48.5859"
            width="4192"
            height="2299.41"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="9.8" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.32 0" />
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_131_72" />
          </filter>
          <filter
            id="filter1_i_131_72"
            x="1001.27"
            y="1016.1"
            width="2109.46"
            height="932.9"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="9.8" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.32 0" />
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_131_72" />
          </filter>
        </defs>
      </svg>
    </div>
  )
}
