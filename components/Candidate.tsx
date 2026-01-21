import React from 'react'
import { ArrowUpRight, User } from 'lucide-react'

interface CandidatePanelData {
    candidateId?: number;
    name?: string;
    imageUrl?: string;
    description?: string;
}

const Candidate: React.FC<CandidatePanelData> = ({
    candidateId,
    name,
    imageUrl,
    description,
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
                    <span className="text-xs font-bold tracking-wider uppercase text-black">#CANDIDATE{candidateId}</span>
                </div>
            </div>

            {/* Content */}
            <div className="px-2 space-y-4">
                <div className="space-y-1">
                    <h3 className="font-bold text-2xl leading-none tracking-tight">{name}</h3>
                    <p className="text-sm font-medium text-neutral-500 uppercase tracking-wide">CANDIDATE</p>
                </div>

                <p className="text-sm text-neutral-600 line-clamp-2 leading-relaxed font-sans">
                    {description}
                </p>

                {/* Action Button */}
                <button className="w-full h-14 bg-black text-white rounded-full flex items-center justify-between px-6 group/btn hover:scale-105 hover:bg-neutral-800 transition ease-in-out duration-300">
                    <span className="font-black text-m tracking-tighter leading-relaxed">VIEW PROFILE</span>
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center  group-hover/btn:rotate-45 transition duration-300 translate-x-4">
                        <ArrowUpRight className="w-5 h-5 text-black" />
                    </div>
                </button>
            </div>
        </div>
    )
}

export default Candidate
