'use client'

import React from 'react'
import { ArrowUpRight, Github, Linkedin, CheckCircle2, BookOpen, User } from 'lucide-react'
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'

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

    useGSAP(() => {

        // timeline 
        const tl = gsap.timeline({
            delay: .7
        })

        // img animation and vote button animation
        tl.from(".candidate-img", {
            opacity: 0,
            x: -100,
            ease: "elastic.out(2,0.5)",
            duration: 1
        }).from(".candidate-vote-button", {
            opacity: 0,
            x: -100,
            ease: "elastic.out(2,0.5)",
            duration: 1
        }, "-=1")


        // right section container animation
        tl.from(".candidate-right-section", {
            opacity: 0,
            y: 20,
            ease: "power2.inOut",
        }, "-=.8")

    })


    return (
        <div className="min-h-screen bg-surface font-sans selection:bg-primary selection:text-black pb-20">
            <main className="container mx-auto px-4 pt-8 md:pt-16">

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

                    {/* Left Column - Profile & Actions */}
                    <div className="w-full lg:w-[400px] flex flex-col gap-8">
                        {/* Image Card */}
                        <div className="candidate-img relative aspect-[4/5] w-full rounded-[32px] overflow-hidden bg-white border border-neutral-200 shadow-xl shadow-black/5 group select-none cursor-pointer">
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
                        <Link href="/leaderboard" className='candidate-vote-button'>
                            <button className="w-full h-20 bg-primary rounded-[24px] flex items-center justify-between px-8 group hover:brightness-95 active:scale-[0.98] transition-all shadow-lg shadow-black/5 cursor-pointer">
                                <div className="flex flex-col items-start">
                                    <span className="text-xs font-bold uppercase tracking-widest text-neutral-800">Make your choice</span>
                                    <span className="text-2xl font-black text-black tracking-tight">VOTE NOW</span>
                                </div>
                                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                                    <ArrowUpRight className="w-6 h-6 text-white" />
                                </div>
                            </button>
                        </Link>
                    </div>

                    {/* Right Column - Details */}
                    <div className="candidate-right-section flex-1 flex flex-col gap-10">
                        {/* Title Section - Massive Typography */}
                        <div className="space-y-6">
                            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-neutral-200 bg-white/50 backdrop-blur-sm shadow-sm select-none">
                                <span className="text-xs font-bold tracking-[0.2em] uppercase text-neutral-500">CANDIDATE : 00{candidateId}</span>
                            </div>

                            <h1 className=" text-6xl md:text-7xl lg:text-8xl font-black uppercase text-neutral-900 leading-[0.85] tracking-tighter font-clash-display break-words">
                                {name}
                            </h1>

                            <div className="relative pl-6 border-l-4 border-primary/50 py-2">
                                <p className="text-xl md:text-2xl font-medium text-neutral-800 leading-relaxed font-clash-display italic">
                                    "{description}"
                                </p>
                            </div>
                        </div>

                        <div className="h-px w-full bg-neutral-200"></div>

                        {/* Manifesto Grid */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <div className="h-px flex-1 bg-neutral-200"></div>
                                <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest">Manifesto</span>
                                <div className="h-px flex-1 bg-neutral-200"></div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {manifesto ? manifesto.map((item, index) => (
                                    <div key={index} className="group relative bg-neutral-50 rounded-[24px] p-6 hover:bg-black hover:text-white transition-all duration-300 border border-transparent hover:border-black cursor-default">
                                        <div className="absolute top-6 right-6 font-clash-display text-4xl font-black text-neutral-200 group-hover:text-primary transition-colors">
                                            {(index + 1).toString().padStart(2, '0')}
                                        </div>
                                        <div className="h-full flex flex-col justify-end relative z-10 pt-12">
                                            <p className="text-lg font-bold leading-tight group-hover:translate-x-1 transition-transform">{item}</p>
                                        </div>
                                    </div>
                                )) : ""}
                            </div>
                        </div>

                        {/* Data Block - Education */}
                        <div className="rounded-[32px] bg-white border-2 border-dashed border-neutral-200 p-8 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-neutral-200 to-primary"></div>

                            <div className="flex flex-col gap-6 relative z-10">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3 text-neutral-400">
                                        <BookOpen className="w-5 h-5" />
                                        <span className="font-mono text-xs uppercase tracking-widest">Background Check</span>
                                    </div>
                                    <div className="px-2 py-0.5 rounded bg-primary/20 text-primary-dark font-mono text-[10px] font-bold uppercase">Verified</div>
                                </div>

                                <div className="space-y-4 font-mono">
                                    <div>
                                        <span className="text-xs text-neutral-400 uppercase block mb-1">Education & Experience</span>
                                        <p className="text-xl font-bold text-black font-clash-display uppercase leading-tight">
                                            {education}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    )
}

export default CandidateDetails
