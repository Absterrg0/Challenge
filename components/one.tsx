'use client'

import { Check, Star, Crown } from "lucide-react"
import { motion } from "motion/react"
import { useState } from "react"

const plans = [
  {
    headerText: "Starter",
    amount: "0",
    mainText: "Perfect For Small Teams",
    buttonText: "Start Hiring",
    data: ["3 Projects", "AI Applicant Screening", "AI Recruiter","AI Interviews"],
  },
  {
    headerText: "Professional",
    amount: "99",
    mainText: "Perfect For Growing Teams",
    buttonText: "Start Hiring",
    data: [
      "Unlimited Projects",
      "AI Applicant Screening",
      "AI Recruiter",
      "Risk-Free Guarantee",
    ],
  },
  {
    headerText: "Enterprise",
    amount: "1000",
    mainText: "For Large Organizations",
    buttonText: "Contact Us",
    data: [
      "Unlimited Projects",
      "AI Applicant Screening",
      "Custom Skill Assessments",
      "Custom AI Recruiter",
    ],
  },
];

interface InputProps{
    headerText:string,
    amount:string,
    mainText:string,
    index:number,
}

interface MainCardProps{
    headerText:string,
    amount:string,
    mainText:string,
    data:string[],
    index:number,
}

export default function One(){
    return <div className="h-screen w-screen bg-slate-50/30 flex gap-12 flex-col  items-center border-t border-slate-100/40">
        <div className="mt-24">
            <Header></Header>
            <div className="flex gap-6 items-start">
                {plans.map((plan,index)=>(
                    <MainCard key={index} index={index} {...plan}></MainCard>
                ))}
            </div>
        </div>
    </div>
}

const Header= ()=>{
    return <div className="text-center space-y-4 border-b border-slate-100/20 pb-8">
        <div className="font-semibold text-5xl text-slate-800">
            Pricing Plans
        </div>
        <div className="font-medium text-slate-600">
            Choose the right plan for your needs.
        </div>
    </div>
}

const Card = ({headerText,amount,mainText,index}:InputProps)=>{
    const isProfessional = index === 1;
    
    return <div className={`p-4 w-90 h-80 rounded-3xl relative ${
        isProfessional 
            ? 'bg-white-80 border border-blue-200/50' 
            : 'bg-white/80 border border-slate-200/90'
    } shadow-[0px_1px_2px_rgba(0,0,0,0.02),0px_1px_10px_rgba(0,0,0,0.3)]`}>
        
        {/* Popular Badge for Professional */}
        {isProfessional && (
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1 border border-blue-400/30">
                     Popular
                </div>
            </div>
        )}
        
        <div className={`items-start justify-between rounded-2xl h-40 flex flex-col p-3 relative ${
            isProfessional 
                ? 'bg-gradient-to-br from-blue-100/80 to-indigo-100/80 border border-blue-200/40' 
                : 'bg-slate-100/60 border border-slate-200/30'
        }`}>
            {/* Gradient overlay for Professional */}
            {isProfessional && (
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-2xl"></div>
            )}
            
            <div className={`rounded-full text-sm px-4 py-1 font-bold flex items-center gap-1 relative z-10 ${
                isProfessional 
                    ? 'bg-white border border-slate-100/60 text-blue-700' 
                    : 'bg-white border border-slate-200/50 text-slate-700'
            }`}> 
                
                {headerText}
            </div>
            
            <div className={`p-2 items-end flex w-full pt-3 relative z-10 ${
                isProfessional 
                    ? 'border-t border-slate-200/40' 
                    : 'border-t border-slate-100/30'
            }`}>
                <span className={`text-4xl font-semibold ${
                    isProfessional ? 'text-blue-800' : 'text-slate-800'
                }`}>
                ${amount}
                </span>
                <span className={`text-lg font-semibold ${
                    isProfessional ? 'text-blue-600' : 'text-slate-600'
                }`}>
                    /month
                </span>
            </div>
        </div>
        
        <div className={`py-4 px-2 font-semibold ${
            isProfessional 
                ? 'text-blue-700 border-b border-blue-200/40' 
                : 'text-slate-700 border-b border-slate-100/30'
        }`}>
            {mainText}
        </div>
        
        <div className="py-4">
            <Button index={index}></Button>
        </div>
    </div>
}

const MainCard = ({ headerText, amount, mainText, data, index }: MainCardProps) => {
    const [isHovering, setIsHovering] = useState(false)
    const isProfessional = index === 1;
    
    return (
        <motion.div
            className={`rounded-3xl backdrop-blur-sm ${
                isProfessional 
                    ? 'bg-white/60 border border-blue-200/60' 
                    : 'bg-white/70 border border-slate-200/50'
            } shadow-[0px_1px_3px_rgba(0,0,0,0.23),0px_1px_2px_rgba(0,0,0,0.04)] relative`}
            initial={{ opacity: 0, y: 8, scale: isProfessional ? 0.98 : 1 }}
            animate={{ 
                opacity: 1, 
                y: 0, 
                scale: isProfessional ? 1.02 : 1,
                height: isHovering ? 620 : 320 
            }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
            <motion.div
                onHoverStart={() => setIsHovering(true)}
                onHoverEnd={() => setIsHovering(false)}
                animate={isHovering ? { y: isProfessional ? -2 : -1, scale: 1.005 } : { y: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className={`${
                    isProfessional ? 'border-b border-blue-200/70' : 'border-b border-slate-100/60'
                }`}
            >
                <Card
                    headerText={headerText}
                    amount={amount}
                    mainText={mainText}
                    index={index}
                />
            </motion.div>
            
            <motion.div
                initial={{ maxHeight: 0, opacity: 0, y: 16 }}
                animate={isHovering ? { maxHeight: isProfessional ? 400 : 384, opacity: 1, y: 0 } : { maxHeight: 0, opacity: 0, y: 16 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
            >
                <motion.div className={`m-6 rounded-3xl ${
                    isProfessional 
                        ? 'bg-slate-50/50 border border-blue-200/50' 
                        : 'bg-slate-50/50 border border-slate-200/40'
                }`}>
                    <ul className="py-6 space-y-4">
                        {data.map((element, index) => (
                            <li 
                                key={index} 
                                className={`px-6 flex items-center gap-3 text-sm last:border-b-0 pb-4 last:pb-0 ${
                                    isProfessional 
                                        ? 'text-slate-700 border-b border-blue-100/30' 
                                        : 'text-slate-700 border-b border-slate-100/95'
                                }`}
                            >
                                <div className={`flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center ${
                                    isProfessional 
                                        ? 'border border-blue-300/60 bg-blue-100/80' 
                                        : 'border border-emerald-200/60'
                                }`}>
                                    <Check size={12} className={isProfessional ? "text-blue-600" : "text-emerald-600"} />
                                </div>
                                <span className={`leading-relaxed ${isProfessional ? 'font-medium' : ''}`}>
                                    {element}
                                </span>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

const Button = ({index}:{index:number}) => {
    const isProfessional = index === 1;
    
    if(isProfessional) {
        return (
            <motion.button
                initial={{opacity:0,y:10}}
                animate={{opacity:1,y:0}}
                transition={{duration:0.5,ease:[0.22,1,0.36,1]}}
                whileHover={{
                    transition:{duration:0.5,ease:[0.22,1,0.36,1]}
                }}
                className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 px-8 text-center font-semibold text-lg border border-blue-500/30"
                style={{
                    boxShadow: '0 4px 6px rgba(59,130,246,0.2), 0 1px 3px rgba(59,130,246,0.3), inset 0 1px 0 rgba(255,255,255,0.2)'
                }}>
                Grow Now
            </motion.button>
        );
    }
    
    return (
        <motion.button
            initial={{opacity:0,y:10}}
            animate={{opacity:1,y:0}}
            transition={{duration:0.5,ease:[0.22,1,0.36,1]}}
            whileHover={{
                transition:{duration:0.5,ease:[0.22,1,0.36,1]}
            }}
            className="rounded-full bg-gradient-to-br from-slate-800 to-slate-950 shadow-[0px_2px_20px_2px_rgba(127,127,127,0.6)_inset,0px_10px_8px_rgba(127,127,127,0.2)] text-white py-2 px-8 text-center font-semibold text-lg">
            Start hiring
        </motion.button>
    );
};