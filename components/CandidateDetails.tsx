import React from 'react'
import { ArrowUpRight, Github, Linkedin, CheckCircle2, BookOpen, User } from 'lucide-react'

interface CandidateDetailsProps {
    candidateId?: number;
    name?: string;
    imageUrl?: string;
    description?: string;
    manifesto?: string[];
    education?: string;
    socials?: {
        linkedin?: string;
        github?: string;
    };
}

const CandidateDetails: React.FC<CandidateDetailsProps> = ({
    candidateId,
    name,
    imageUrl,
    description,
    manifesto,
    education,
    socials = {}
}) => {
    return (
        <div className="min-h-screen bg-[#FAFAFA] font-[panchang,sans-serif] selection:bg-primary selection:text-black pb-20">
            <main className="container mx-auto px-4 pt-8 md:pt-16">

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

                    {/* Left Column - Profile & Actions */}
                    <div className="w-full lg:w-[400px] flex flex-col gap-8">
                        {/* Image Card */}
                        <div className="relative aspect-[4/5] w-full rounded-[32px] overflow-hidden bg-white border border-neutral-200 shadow-xl shadow-black/5 group select-none cursor-pointer">
                            {imageUrl ? (
                                <img src={imageUrl} alt={name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center bg-neutral-100 text-neutral-300">
                                    <User className="w-32 h-32" />
                                </div>
                            )}
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent h-40"></div>

                            {/* Floating Socials */}
                            <div className="absolute bottom-6 left-6 flex gap-3">
                                {socials.linkedin && (
                                    <a href={socials.linkedin} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-primary hover:border-transparent transition-all group/social">
                                        <Linkedin className="w-5 h-5 text-white group-hover/social:text-black" />
                                    </a>
                                )}
                                {socials.github && (
                                    <a href={socials.github} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-primary hover:border-transparent transition-all group/social">
                                        <Github className="w-5 h-5 text-white group-hover/social:text-black" />
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* Vote Button */}
                        <button className="w-full h-20 bg-primary rounded-[24px] flex items-center justify-between px-8 group hover:brightness-95 active:scale-[0.98] transition-all shadow-lg shadow-black/5 cursor-pointer">
                            <div className="flex flex-col items-start">
                                <span className="text-xs font-bold uppercase tracking-widest text-neutral-800">Make your choice</span>
                                <span className="text-2xl font-black text-black tracking-tight">VOTE NOW</span>
                            </div>
                            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                                <ArrowUpRight className="w-6 h-6 text-white" />
                            </div>
                        </button>
                    </div>

                    {/* Right Column - Details */}
                    <div className="flex-1 flex flex-col gap-10">
                        {/* Title Section */}
                        <div className="space-y-4">
                            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-neutral-200 bg-foreground shadow-sm select-none">
                                <span className="text-xs font-bold tracking-widest uppercase text-primary">#Candidate {candidateId}</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-neutral-900 leading-[0.9] uppercase">
                                {name}
                            </h1>
                            <p className="text-xl font-medium text-neutral-500 max-w-2xl leading-relaxed">
                                {description}
                            </p>
                        </div>

                        <div className="h-px w-full bg-neutral-200"></div>

                        {/* Manifesto Section */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center">
                                    <CheckCircle2 className="w-5 h-5 text-primary" />
                                </div>
                                <h3 className="text-2xl font-bold uppercase tracking-tight">Key Manifesto</h3>
                            </div>
                            <div className="grid gap-4">
                                {manifesto ? manifesto.map((item, index) => (
                                    <div key={index} className="group flex items-start gap-4 p-6 bg-white border border-neutral-200 rounded-[24px] hover:border-black transition-colors shadow-sm">
                                        <span className="text-4xl font-black text-neutral-100 group-hover:text-primary transition-colors">0{index + 1}</span>
                                        <p className="text-lg font-medium text-neutral-800 pt-2">{item}</p>
                                    </div>
                                )) : ""}
                            </div>
                        </div>

                        {/* Education / Info */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center">
                                    <BookOpen className="w-5 h-5 text-primary" />
                                </div>
                                <h3 className="text-2xl font-bold uppercase tracking-tight">Background</h3>
                            </div>
                            <div className="p-8 bg-black text-white rounded-[32px]">
                                <span className="block text-xs font-bold text-neutral-400 tracking-widest uppercase mb-2">Education & Experience</span>
                                <p className="text-xl md:text-2xl font-medium leading-relaxed">
                                    {education}
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    )
}

export default CandidateDetails
