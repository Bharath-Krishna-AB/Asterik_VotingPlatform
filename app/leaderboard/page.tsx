
"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import LeaderboardCard from '@/components/leaderboard/LeaderboardCard';
import VotersList from '@/components/leaderboard/VotersList';
import { Crown, Sparkles } from 'lucide-react';

const LeaderboardPage = () => {
    // Mock Data
    const LEADERBOARD_DATA = [
        { rank: 1, name: "Bharath Krishna A B", votes: 452, percentage: 65, imageUrl: "/images/candidate1.jpeg" },
        { rank: 2, name: "Navaneeth R", votes: 243, percentage: 35, imageUrl: "/images/candidate2.png" },
    ];

    return (
        <div className="min-h-screen bg-surface text-neutral-900 font-sans selection:bg-primary selection:text-black">
            <Navbar />

            <main className="container mx-auto px-4 pt-24 pb-20">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div className="space-y-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-white rounded-full text-xs font-bold uppercase tracking-widest">
                            <Sparkles className="w-3 h-3 text-primary" />
                            <span>Election Analysis</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] font-clash-display">
                            Overall Standings
                        </h1>
                    </div>

                    <div className="text-right hidden md:block">
                        <p className="text-neutral-500 font-medium max-w-xs ml-auto">
                            Comprehensive analysis of total valid votes. A detailed breakdown of the final election processing.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative items-start">

                    {/* Left Column: Leaderboard & Stats (8 cols) */}
                    <div className="lg:col-span-8 flex flex-col gap-8">

                        {/* Leaderboard Section */}
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center justify-between px-2">
                                <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">Final Ranking</span>
                                <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">Total Valid Votes</span>
                            </div>

                            {LEADERBOARD_DATA.map((candidate) => (
                                <LeaderboardCard
                                    key={candidate.rank}
                                    rank={candidate.rank}
                                    name={candidate.name}
                                    votes={candidate.votes}
                                    percentage={candidate.percentage}
                                    imageUrl={candidate.imageUrl}
                                />
                            ))}
                        </div>

                        {/* Bottom Row: Widgets */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-auto lg:h-[280px]">
                            {/* Champion Status Widget */}
                            <div className="bg-primary rounded-[32px] p-8 flex flex-col justify-between relative overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform shadow-xl shadow-black/5 min-h-[280px] lg:min-h-0 h-full">
                                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Crown className="w-32 h-32 rotate-12" />
                                </div>
                                <div>
                                    <h3 className="text-3xl font-black uppercase font-clash-display mb-2 leading-none">Victory Margin</h3>
                                    <p className="font-medium text-black/80 text-sm mt-4">Current Leader leads by <span className="font-bold">209 votes</span> in the final tally.</p>
                                </div>
                                <div className="flex items-center gap-2 mt-4 font-bold uppercase tracking-wide border-b-2 border-black/20 self-start pb-1 text-xs">
                                    View Candidate
                                </div>
                            </div>

                            {/* Branding / Logo Widget */}
                            <div className="bg-white rounded-[32px] p-8 flex flex-col items-center justify-center text-center relative overflow-hidden min-h-[280px] lg:min-h-0 h-full shadow-xl shadow-black/5 border border-neutral-100 group cursor-pointer hover:scale-[1.02] transition-transform">
                                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />

                                <div className="relative z-10 flex flex-col items-center gap-6">
                                    <div className="w-24 h-24 rounded-3xl bg-black flex items-center justify-center -rotate-6 group-hover:rotate-12 transition-transform duration-500 shadow-2xl shadow-neutral-200">
                                        <Sparkles className="text-primary w-12 h-12" />
                                    </div>

                                    <div className="space-y-1">
                                        <h3 className="text-3xl font-black tracking-tighter uppercase font-clash-display text-neutral-900">Asterik</h3>
                                        <p className="text-[10px] font-bold tracking-[0.2em] text-neutral-400 uppercase">Official Voting Partner</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Voters List (4 cols) */}
                    <div className="lg:col-span-4 h-full">
                        {/* Sticky sidebar that takes available height */}
                        <div className="lg:sticky lg:top-24 h-[500px] lg:h-[56.5vh] min-h-[400px]">
                            <VotersList />
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
};

export default LeaderboardPage;
