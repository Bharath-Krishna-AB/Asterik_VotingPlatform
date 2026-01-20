import React from 'react'
import { ArrowUpRight, User } from 'lucide-react'

interface CandidatePanelProps {
    name?: string;
    role?: string;
    imageUrl?: string;
    description?: string;
}

const Candidate: React.FC<CandidatePanelProps> = ({
    name = "Sarah J. Connor", // Default name
    role = "Presidential Candidate",
    imageUrl,
    description = "Advocating for a sustainable future through transparent governance and community-driven initiatives."
}) => {
    return (
        <div className="group relative w-full max-w-sm bg-white rounded-[32px] p-4 border border-neutral-200 hover:border-black transition-colors duration-300 shadow-xl shadow-black/5 font-[panchang,sans-serif] my-12">
            {/* Image Container */}
            <div className="relative w-full aspect-[4/5] rounded-[24px] overflow-hidden bg-neutral-100 mb-6">
                {imageUrl ? (
                    <img src={imageUrl} alt={name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-neutral-100 text-neutral-300">
                        <User className="w-24 h-24" />
                    </div>
                )}

                {/* Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full border border-neutral-100">
                    <span className="text-xs font-bold tracking-wider uppercase text-black">#{role.split(' ')[0]}</span>
                </div>
            </div>

            {/* Content */}
            <div className="px-2 space-y-4">
                <div className="space-y-1">
                    <h3 className="font-bold text-2xl leading-none tracking-tight">{name}</h3>
                    <p className="text-sm font-medium text-neutral-500 uppercase tracking-wide">{role}</p>
                </div>

                <p className="text-sm text-neutral-600 line-clamp-2 leading-relaxed font-sans">
                    {description}
                </p>

                {/* Action Button */}
                <button className="w-full h-14 bg-black text-white rounded-2xl flex items-center justify-between px-6 group/btn hover:bg-neutral-800 transition-colors">
                    <span className="font-bold text-sm tracking-wide">VIEW PROFILE</span>
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-black transition-colors">
                        <ArrowUpRight className="w-4 h-4" />
                    </div>
                </button>
            </div>
        </div>
    )
}

export default Candidate
