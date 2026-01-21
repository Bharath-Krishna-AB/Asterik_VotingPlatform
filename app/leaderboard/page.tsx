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
        <div className="min-h-screen bg-[#FAFAFA] text-neutral-900 font-sans selection:bg-[#D5EF36] selection:text-black">
            <Navbar />

            <main className="container mx-auto px-4 pt-24 pb-20">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div className="space-y-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-white rounded-full text-xs font-bold uppercase tracking-widest">
                            <Sparkles className="w-3 h-3 text-[#D5EF36]" />
                            <span>Live Standings</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] font-[panchang,sans-serif]">
                            Voting<br />Leaderboard
                        </h1>
                    </div>

                    <div className="text-right hidden md:block">
                        <p className="text-neutral-500 font-medium max-w-xs ml-auto">
                            Real-time updates of the current voting status. Every vote counts towards the final decision.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative">

                    {/* Left Column: Leaderboard (8 cols) */}
                    <div className="lg:col-span-8 flex flex-col gap-4">
                        {/* Top Banner / Hero Card could go here, but let's stick to the list for clarity */}
                        <div className="flex items-center justify-between px-2 mb-2">
                            <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">Candidate Ranking</span>
                            <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">Total Votes</span>
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

                    {/* Right Column: Voters Feed (4 cols) */}
                    <div className="lg:col-span-4 space-y-8">
                        {/* Sticky container for the feed */}
                        <div className="sticky top-24">
                            <VotersList />

                            {/* Additional Info Box */}
                            <div className="mt-6 bg-[#D5EF36] rounded-[32px] p-8 flex flex-col justify-between min-h-[200px] relative overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform">
                                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Crown className="w-32 h-32 rotate-12" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black uppercase font-[panchang,sans-serif] mb-2 leading-none">Champion<br />Status</h3>
                                    <p className="font-medium text-black/80 text-sm">Review the top candidate's full manifesto.</p>
                                </div>
                                <div className="flex items-center gap-2 mt-4 font-bold uppercase tracking-wide border-b-2 border-black/20 self-start pb-1">
                                    View Details
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
};

export default LeaderboardPage;
