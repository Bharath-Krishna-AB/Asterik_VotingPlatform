import React, { useMemo, useState } from 'react';
import { User } from 'lucide-react';

// Mock data generator for voters
const RECENT_VOTERS = [
    { name: "Alex Johnson", time: "2m ago", candidate: "Bharath Krishna" },
    { name: "Maria Garcia", time: "5m ago", candidate: "Navaneeth R" },
    { name: "David Kim", time: "12m ago", candidate: "Bharath Krishna" },
    { name: "Sophie Turner", time: "15m ago", candidate: "Navaneeth R" },
    { name: "Lucas Silva", time: "18m ago", candidate: "Bharath Krishna" },
    { name: "Emily Blunt", time: "22m ago", candidate: "Navaneeth R" },
    { name: "Ryan Reynolds", time: "25m ago", candidate: "Bharath Krishna" },
    { name: "Jessica Alba", time: "30m ago", candidate: "Bharath Krishna" },
    { name: "John Doe", time: "32m ago", candidate: "Navaneeth R" },
    { name: "Jane Doe", time: "35m ago", candidate: "Bharath Krishna" },
];

const VotersList = () => {
    const [filter, setFilter] = useState('All');

    const filteredVoters = useMemo(() => {
        if (filter === 'All') return RECENT_VOTERS;
        return RECENT_VOTERS.filter(v => v.candidate.includes(filter.replace(' R', '')));
    }, [filter]);

    return (
        <div className="w-full bg-black rounded-[32px] p-6 lg:p-8 overflow-hidden relative shadow-2xl h-full flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-neutral-800 shrink-0">
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <div className="w-3 h-3 bg-[#D5EF36] rounded-full" />
                    </div>
                    <h2 className="text-2xl font-black text-white uppercase tracking-tight font-[panchang,sans-serif]">Vote Log</h2>
                </div>
                <div className="flex gap-2">
                    {['All', 'Bharath', 'Navaneeth'].map((f) => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${filter === f
                                ? 'bg-[#D5EF36] text-black'
                                : 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700'
                                }`}
                        >
                            {f}
                        </button>
                    ))}
                </div>
            </div>

            {/* Scrollable List */}
            <div className="relative flex-1 overflow-y-auto pr-2 custom-scrollbar">
                <div className="space-y-3">
                    {filteredVoters.map((voter, i) => (
                        <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-neutral-900/50 border border-neutral-800/50 hover:bg-neutral-800/80 transition-colors group">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center border border-neutral-700 group-hover:border-[#D5EF36]/30 transition-colors">
                                    <User className="w-5 h-5 text-neutral-400 group-hover:text-[#D5EF36]" />
                                </div>
                                <div>
                                    <div className="text-white font-bold leading-none mb-1">{voter.name}</div>
                                    <div className="text-xs text-neutral-500">voted for <span className="text-neutral-300">{voter.candidate}</span></div>
                                </div>
                            </div>
                            <span className="text-xs font-mono text-[#D5EF36] opacity-60 group-hover:opacity-100">{voter.time}</span>
                        </div>
                    ))}

                    {filteredVoters.length === 0 && (
                        <div className="text-center text-neutral-500 py-12">
                            No votes found for this filter.
                        </div>
                    )}
                </div>
            </div>

            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(213, 239, 54, 0.3);
                    border-radius: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(213, 239, 54, 0.8);
                }
            `}</style>
        </div>
    );
};

export default VotersList;
