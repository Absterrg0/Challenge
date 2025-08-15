import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Navbar(){
    return (
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100/50">
            <div className="flex justify-between items-center p-2">
                <div>
                    <Image
                        src="/logo.png"
                        alt="logo"
                        width={50}
                        height={100}
                    />
                </div>
                <div className="flex items-center gap-12">
                    <div className="flex items-center justify-center gap-8 text-sm font-semibold">
                        <div className="text-gray-700 hover:text-gray-900 transition-colors cursor-pointer">
                            Home
                        </div>
                        <div className="text-gray-700 hover:text-gray-900 transition-colors cursor-pointer">
                            How It Works
                        </div>
                        <div className="flex items-center gap-1 text-gray-700 hover:text-gray-900 transition-colors cursor-pointer">
                            Resources <ChevronDown size={12} />
                        </div>
                    </div>
                    <button className="text-md font-medium text-white bg-red-400 p-2 px-6 rounded-xl flex justify-center items-center gap-2 hover:bg-red-500 transition-colors">
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
                    </button>
                </div>
            </div>
        </div>
    );
}