"use client"

import { useState } from 'react'
import { Asterisk, LogOut, ChevronDown, Hash } from 'lucide-react'

const Navbar = () => {
    // Mock user data for now
    const user = {
        name: "John Doe"
    }
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full h-24 bg-white/80 backdrop-blur-md border-b border-neutral-100 flex items-center justify-between px-6 md:px-12 sticky top-0 z-50 font-[panchang,sans-serif]">
            {/* Logo Section */}
            <div className="flex items-center gap-3 group cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center rotate-6 group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-primary/20">
                    <Asterisk className="text-primary w-5 h-5" />
                </div>
                <span className="font-bold text-xl tracking-tight hidden md:block">ASTERIK</span>
            </div>

            {/* User Dropdown */}
            <div className="relative">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center gap-3 px-4 py-2 rounded-2xl hover:bg-neutral-50 transition-colors border border-transparent hover:border-neutral-100"
                >
                    <span className="font-bold text-sm tracking-wide">{user.name}</span>
                    <ChevronDown className={`w-4 h-4 text-neutral-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                {isOpen && (
                    <div className="absolute right-0 top-full mt-2 w-56 bg-white border border-neutral-200 rounded-2xl shadow-xl shadow-black/5 p-2 flex flex-col gap-1 anim-fade-in origin-top-right">
                        {/* Info Item */}
                        <div className="px-4 py-3 flex items-center gap-3 bg-neutral-50 rounded-xl mb-1">
                            <div className="w-8 h-8 rounded-full bg-white border border-neutral-200 flex items-center justify-center">
                                <Hash className="w-3.5 h-3.5 text-neutral-400" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Voter ID</span>
                                <span className="text-xs font-bold text-neutral-900">#8839</span>
                            </div>
                        </div>

                        {/* Logout Item */}
                        <button className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-50 text-neutral-600 hover:text-red-600 transition-colors group w-full text-left">
                            <LogOut className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
                            <span className="text-sm font-bold">Logout</span>
                        </button>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar
