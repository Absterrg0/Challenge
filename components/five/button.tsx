

interface InputProps{
    title:string;
}

export default function Button({title}:InputProps){
    return <button className="rounded-full px-5 py-2 text-white/80 bg-black/20 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.6),0_0px_10px_rgba(0,0,0,0.4),0_0px_20px_rgba(0,0,0,0.2)] hover:bg-black/30 hover:border-white/20 hover:text-white hover:shadow-[0_8px_32px_rgba(0,0,0,0.7),0_0px_15px_rgba(0,0,0,0.5),0_0px_30px_rgba(0,0,0,0.3)] transition-all duration-300">
        {title}
    </button>
}   