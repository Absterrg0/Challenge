'use client'
import Image from "next/image"
import Navbar from "./navbar"
import { Calendar, ChevronDown, Clock, Trophy } from "lucide-react";
import { motion } from "motion/react";

export default function LandingPage(){
    return (
        <div className="min-h-screen relative overflow-hidden ">
            {/* Background with concentric circles */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-red-100 to-red-200"></div>
            <div className="absolute inset-0">
                <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-red-200/30"
                ></motion.div>
                <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.05, ease: "easeOut" }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-red-200/20"
                ></motion.div>
                <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-red-200/10"
                ></motion.div>
            </div>
            
            <div className="relative z-10 max-w-7xl mx-auto px-4 pt-8">
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                >
                    <Navbar />
                </motion.div>
                
                {/* Hero Section */}
                <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
                    className="mt-8 flex flex-col items-center text-center space-y-6"
                >
                    <motion.div 
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.2, delay: 0.15, ease: "easeOut" }}
                        className="bg-white rounded-2xl flex items-center gap-3 px-4 py-2 w-fit text-sm shadow-sm"
                    >
                        <div className="bg-red-400 text-white rounded-xl p-1 px-2 flex items-center gap-1">
                            
                            31%
                        </div>
                        <div className="text-gray-800 font-medium">
                            Increased AOV Value
                        </div>
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ y: 15, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
                        className="text-5xl font-bold text-gray-900 max-w-4xl"
                    >
                        Cut Support Tickets & Let <br /> Customers Edit Orders 
                    </motion.h1>
                    
                    <motion.p 
                        initial={{ y: 15, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.25, ease: "easeOut" }}
                        className="text-xl text-gray-700 max-w-3xl"
                    >
                        Let Customers Edit Orders Themselves: Save your customers time <br /> and yourself from support email headaches
                    </motion.p>
                    
                    <motion.div 
                        initial={{ y: 15, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.3, ease: "easeOut" }}
                        className="flex gap-6"
                    >
                        <motion.button 
                            whileHover={{ y: -1 }}
                            whileTap={{ y: 0 }}
                            transition={{ duration: 0.1 }}
                            className="bg-white border border-red-400 px-6 py-3 rounded-xl text-red-400 font-medium hover:bg-red-50 transition-colors"
                        >
                            Get Demo
                        </motion.button>
                        <motion.button 
                            whileHover={{ y: -1 }}
                            whileTap={{ y: 0 }}
                            transition={{ duration: 0.1 }}
                            className="text-md font-medium text-white bg-red-400 p-2 px-6 rounded-xl flex justify-center items-center gap-2 hover:bg-red-500 transition-colors"
                        >
                            <span>
                                <Image
                                src='/shopify.png'
                                alt="shopify"
                                width={20}
                                height={10}
                                />
                            </span>
                            <div>
                                Install Customizer
                            </div>
                        </motion.button>
                    </motion.div>
                </motion.div>

                {/* Main Interactive Diagram */}
                <div className="mt-16 relative flex justify-center items-center min-h-[900px]">
                    {/* SVG Connections with Animation and Pulses */}
                    <svg className="absolute inset-0 left-55  -top-10 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                        {/* Define gradients and masks for pulses */}
                        <defs>
                            <radialGradient id="pulseGradient" cx="50%" cy="50%" r="50%">
                                <stop offset="0%" stopColor="#ff4444" stopOpacity="1"/>
                                <stop offset="40%" stopColor="#f97316" stopOpacity="0.8"/>
                                <stop offset="100%" stopColor="#f97316" stopOpacity="0"/>
                            </radialGradient>
                            
                            <linearGradient id="pulseLineGradient" gradientUnits="userSpaceOnUse">
                                <stop offset="0%" stopColor="transparent"/>
                                <stop offset="30%" stopColor="#ff4444"/>
                                <stop offset="50%" stopColor="#f97316"/>
                                <stop offset="70%" stopColor="#ff4444"/>
                                <stop offset="100%" stopColor="transparent"/>
                                <animateTransform
                                    attributeName="gradientTransform"
                                    type="translate"
                                    values="0 0; 800 0; 0 0"
                                    dur="1.5s"
                                    begin="1.8s"
                                    repeatCount="indefinite"
                                />
                            </linearGradient>
                        </defs>

                        {/* Top Left to Center - Base Path */}
                        <motion.path 
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 1.5, ease: "easeInOut" }}
                            d="M120 60 Q180 20 280 100 Q350 180 420 250 Q440 290 400 320" 
                            stroke="#f97316" 
                            strokeWidth="2" 
                            fill="none"
                            strokeDasharray="5,5"
                            strokeLinecap="round"
                            opacity="0.6"
                        />
                        
                        {/* Top Left to Center - Pulse Overlay */}
                        <motion.path 
                            d="M120 60 Q180 20 280 100 Q350 180 420 250 Q440 290 400 320" 
                            stroke="#ff4444" 
                            strokeWidth="4" 
                            fill="none"
                            strokeLinecap="round"
                            strokeDasharray="30 500"
                            initial={{ strokeDashoffset: 530, opacity: 0 }}
                            animate={{ 
                                strokeDashoffset: [-530, -1060, -530],
                                opacity: [0, 1, 0.8, 1, 0]
                            }}
                            transition={{
                                duration: 1.8,
                                delay: 2.3,
                                repeat: Infinity,
                                repeatDelay: 1,
                                ease: "easeInOut"
                            }}
                        />

                        {/* Bottom Left to Center - Base Path */}
                        <motion.path 
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 1.6, ease: "easeInOut" }}
                            d="M120 540 Q250 480 150 420 Q80 380 200 350 Q300 320 350 380 Q380 420 400 360" 
                            stroke="#f97316" 
                            strokeWidth="2" 
                            fill="none"
                            strokeDasharray="5,5"
                            strokeLinecap="round"
                            opacity="0.6"
                        />
                        
                        {/* Bottom Left to Center - Pulse Overlay */}
                        <motion.path 
                            d="M120 540 Q250 480 150 420 Q80 380 200 350 Q300 320 350 380 Q380 420 400 360" 
                            stroke="#ff4444" 
                            strokeWidth="4" 
                            fill="none"
                            strokeLinecap="round"
                            strokeDasharray="35 600"
                            initial={{ strokeDashoffset: 635, opacity: 0 }}
                            animate={{ 
                                strokeDashoffset: [-635, -1270, -635],
                                opacity: [0, 1, 0.8, 1, 0]
                            }}
                            transition={{
                                duration: 2,
                                delay: 2.9,
                                repeat: Infinity,
                                repeatDelay: 1.2,
                                ease: "easeInOut"
                            }}
                        />
                        
                        {/* Top Right to Center - Base Path */}
                        <motion.path 
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 1.7, ease: "easeInOut" }}
                            d="M680 60 Q620 20 520 100 Q450 180 380 250 Q360 290 400 320" 
                            stroke="#f97316" 
                            strokeWidth="2" 
                            fill="none"
                            strokeDasharray="5,5"
                            strokeLinecap="round"
                            opacity="0.6"
                        />
                        
                        {/* Top Right to Center - Pulse Overlay */}
                        <motion.path 
                            d="M680 60 Q620 20 520 100 Q450 180 380 250 Q360 290 400 320" 
                            stroke="#ff4444" 
                            strokeWidth="4" 
                            fill="none"
                            strokeLinecap="round"
                            strokeDasharray="30 500"
                            initial={{ strokeDashoffset: 530, opacity: 0 }}
                            animate={{ 
                                strokeDashoffset: [-530, -1060, -530],
                                opacity: [0, 1, 0.8, 1, 0]
                            }}
                            transition={{
                                duration: 1.8,
                                delay: 3.5,
                                repeat: Infinity,
                                repeatDelay: 1,
                                ease: "easeInOut"
                            }}
                        />
                        
                        {/* Bottom Right to Center - Base Path */}
                        <motion.path 
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 1.8, ease: "easeInOut" }}
                            d="M680 540 Q550 480 650 420 Q720 380 600 350 Q500 320 450 380 Q420 420 400 360" 
                            stroke="#f97316" 
                            strokeWidth="2" 
                            fill="none"
                            strokeDasharray="5,5"
                            strokeLinecap="round"
                            opacity="0.6"
                        />
                        
                        {/* Bottom Right to Center - Pulse Overlay */}
                        <motion.path 
                            d="M680 540 Q550 480 650 420 Q720 380 600 350 Q500 320 450 380 Q420 420 400 360" 
                            stroke="#ff4444" 
                            strokeWidth="4" 
                            fill="none"
                            strokeLinecap="round"
                            strokeDasharray="35 600"
                            initial={{ strokeDashoffset: 635, opacity: 0 }}
                            animate={{ 
                                strokeDashoffset: [-635, -1270, -635],
                                opacity: [0, 1, 0.8, 1, 0]
                            }}
                            transition={{
                                duration: 2,
                                delay: 4.1,
                                repeat: Infinity,
                                repeatDelay: 1.2,
                                ease: "easeInOut"
                            }}
                        />
                    </svg>

                    {/* Central Card */}
                    <motion.div 
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.8, ease: "easeOut" }}
                        className="relative z-20 -translate-y-40"
                    >
                        <Card1 />
                    </motion.div>
                    
                    {/* Top Left Card */}
                    <motion.div 
                        initial={{ x: -30, y: -30, opacity: 0 }}
                        animate={{ x: 0, y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.9, ease: "easeOut" }}
                        className="absolute z-10 left-30 top-0"
                    >
                        <Card2 />
                    </motion.div>
                    
                    {/* Bottom Left Card */}
                    <motion.div 
                        initial={{ x: -30, y: 30, opacity: 0 }}
                        animate={{ x: 0, y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 1.0, ease: "easeOut" }}
                        className="absolute z-10 left-30 top-120"
                    >
                        <Card3 />
                    </motion.div>
                    
                    {/* Top Right Card */}
                    <motion.div 
                        initial={{ x: 30, y: -30, opacity: 0 }}
                        animate={{ x: 0, y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 1.1, ease: "easeOut" }}
                        className="absolute z-10 right-30 translate-y-10"
                    >
                        <Card4 />
                    </motion.div>
                    
                    {/* Bottom Right Card */}
                    <motion.div 
                        initial={{ x: 30, y: 30, opacity: 0 }}
                        animate={{ x: 0, y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 1.2, ease: "easeOut" }}
                        className="absolute z-10 top-0 right-24"
                    >
                        <Card5 />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

const Card1 = () => {
    return (
        <motion.div 
            whileHover={{ y: -2 }}
            transition={{ duration: 0.15 }}
            className="w-90 flex flex-col rounded-2xl bg-white p-6 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)] border border-gray-100"
        >
            <div className="text-xl font-semibold mb-4 flex items-center gap-2">
      
                Your Order is Completed!
            </div>
            <div className="flex items-center gap-4 rounded-xl p-4 bg-gray-50 border border-gray-200 shadow-sm">
                <div className="rounded-xl bg-red-100 p-2 flex items-center justify-center w-20 h-20 overflow-hidden">
                    <Image
                        src="/tshirt.png"
                        alt="T-shirt"
                        width={80}
                        height={80}
                        className="object-contain"
                    />
                </div>
                <div className="flex flex-col flex-1 justify-between">
                    <div className="bg-gray-200 h-3 rounded-full w-full mb-2"></div>
                    <div className="bg-gray-200 h-3 rounded-full w-1/2 mb-3"></div>
                    <div className="text-green-600 text-xl font-semibold mb-1">
                        $15
                    </div>
                    <div className="text-sm text-gray-600">
                        Quantity: <span className="text-gray-900 font-semibold">1</span>
                    </div>
                </div>
            </div>
            <motion.button 
                whileHover={{ y: -1 }}
                whileTap={{ y: 0 }}
                transition={{ duration: 0.1 }}
                className="mt-4 py-3 text-xs rounded-xl text-center bg-pink-100 text-pink-600 font-medium hover:bg-pink-200 transition-colors shadow-sm"
            >
                Edit Your Order
            </motion.button>
            <div className="text-xs mt-3 text-center text-gray-600">
                You have <span className="text-pink-600 font-semibold">29 mins</span> to edit
            </div>
        </motion.div>
    );
}

const Card2 = () => {
    return (
        <motion.div 
            whileHover={{ y: -1 }}
            transition={{ duration: 0.15 }}
            className="w-64"
        >
            <div className="bg-white rounded-xl flex gap-2 items-center text-xs p-3 shadow-lg border border-gray-100">
                <div className="text-gray-500">
                    <Calendar size={16} />
                </div>
                <div className="text-gray-700 font-medium">
                    Update Contact Information
                </div>
            </div>

            <div className="mt-3 p-4 bg-white rounded-xl space-y-3 shadow-lg border border-gray-100">
                <div className="text-xs text-gray-600 font-medium">
                    Phone
                </div>
                <input 
                    className="bg-gray-100 rounded-lg w-full px-3 py-2 text-sm border-0 focus:ring-2 focus:ring-red-400 focus:outline-none" 
                    placeholder="+091 12345 67890" 
                    type="text" 
                />
                <div className="text-xs text-gray-600 font-medium">
                    Email
                </div>
                <input 
                    className="bg-gray-100 rounded-lg w-full px-3 py-2 text-sm border-2 border-red-400 focus:ring-2 focus:ring-red-400 focus:outline-none" 
                    placeholder="email@example.com" 
                    type="email" 
                />
            </div>
        </motion.div>
    );
}

const Card3 = () => {
    return (
        <motion.div 
            whileHover={{ y: -1 }}
            transition={{ duration: 0.15 }}
            className="w-64"
        >
            <div className="bg-white rounded-xl flex gap-2 items-center text-xs p-3 shadow-lg border border-gray-100">
                <div className="text-gray-500">
                    <Calendar size={16} />
                </div>
                <div className="text-gray-700 font-medium">
                    Update Shipping Address
                </div>
            </div>

            <div className="mt-3 p-4 bg-white rounded-xl space-y-3 shadow-lg border border-gray-100">
                <div className="text-xs text-gray-600 font-medium">
                    Shipping Address
                </div>
                <input 
                    className="bg-gray-100 rounded-lg w-full px-3 py-2 text-sm border-0 focus:ring-2 focus:ring-red-400 focus:outline-none" 
                    placeholder="City" 
                    type="text" 
                />
                <input 
                    className="bg-gray-100 rounded-lg w-full px-3 py-2 text-sm border-0 focus:ring-2 focus:ring-red-400 focus:outline-none" 
                    placeholder="State" 
                    type="text" 
                />
            </div>
        </motion.div>
    );
}

const Card4 = () => {
    return (
        <motion.div 
            whileHover={{ y: -1 }}
            transition={{ duration: 0.15 }}
            className="w-64"
        >
            <div className="bg-white rounded-xl flex gap-2 items-center text-xs p-3 shadow-lg border border-gray-100">
                <div className="text-gray-500">
                    <Clock size={16} />
                </div>
                <div className="text-gray-700 font-medium">
                    Change Delivery Date
                </div>
            </div>

            <div className="mt-3 p-4 bg-white rounded-xl space-y-3 shadow-lg border border-gray-100">
                <div className="text-xs text-gray-600 font-medium flex justify-between items-center">
                    <span>Preferred Delivery Date</span>
                    <ChevronDown size={14} />
                </div>
                
                <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 rounded-lg border border-gray-200">
                        <div className="flex-1">
                            <div className="text-xs font-medium text-gray-900">FREE DELIVERY</div>
                            <div className="text-xs text-gray-600">Friday, 7 March</div>
                        </div>
                        <div className="w-4 h-4 rounded-full border-2 border-red-400 bg-red-400 flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-white"></div>
                        </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-2 rounded-lg border border-gray-200">
                        <div className="flex-1 flex items-center gap-2">
                            <Clock size={12} className="text-gray-500" />
                            <div>
                                <div className="text-xs font-medium text-gray-900">FAST DELIVERY (+$5)</div>
                                <div className="text-xs text-gray-600">Tuesday, 3 March</div>
                            </div>
                        </div>
                        <div className="w-4 h-4 rounded-full border-2 border-gray-300"></div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

const Card5 = () => {
    return (
        <motion.div 
            whileHover={{ y: -1 }}
            transition={{ duration: 0.15 }}
            className="w-64"
        >
            <div className="bg-white rounded-xl flex gap-2 items-center text-xs p-3 shadow-lg border border-gray-100">
                <div className="text-gray-500">
                    <Calendar size={16} />
                </div>
                <div className="text-gray-700 font-medium">
                    Change Quantities / Remove Items
                </div>
            </div>

            <div className="mt-3 p-4 bg-white rounded-xl space-y-3 shadow-lg border border-gray-100">
                <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-gray-100 flex items-center justify-center w-12 h-12 overflow-hidden">
                        <Image
                            src="/tshirt.png"
                            alt="T-shirt"
                            width={48}
                            height={48}
                            className="object-contain"
                        />
                    </div>
                    <div className="flex-1">
                        <div className="text-sm text-gray-600 font-medium">
                            Quantity:
                        </div>
                        <div className="mt-1">
                            <input 
                                type="number" 
                                value="2" 
                                className="w-16 px-2 py-1 text-sm border-2 border-red-400 rounded focus:ring-2 focus:ring-red-400 focus:outline-none bg-white"
                            />
                        </div>
                    </div>
                </div>
                
                <motion.button 
                    whileHover={{ y: -1 }}
                    whileTap={{ y: 0 }}
                    transition={{ duration: 0.1 }}
                    className="w-full py-2 text-xs bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
                >
                    Remove Item
                </motion.button>
            </div>
        </motion.div>
    );
}