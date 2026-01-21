import React from 'react';
import { Users, TrendingUp } from 'lucide-react';

const ParticipationStats = () => {
    return (
        <div className="w-full h-full bg-white rounded-[32px] p-6 lg:p-8 shadow-xl shadow-black/5 border border-neutral-200 flex flex-col justify-between">
            <div className="flex items-start justify-between mb-4">
                <div>
                    <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">Total Participation</span>
                    <h3 className="text-4xl font-black text-neutral-900 mt-1 font-[panchang,sans-serif]">84.2%</h3>
                </div>
                <div className="w-12 h-12 rounded-full bg-[#D5EF36]/20 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-[#7a8c1f]" />
                </div>
            </div>

            <div className="space-y-6">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-neutral-50 rounded-2xl">
                        <div className="text-2xl font-bold text-black mb-1">1,204</div>
                        <div className="text-xs font-medium text-neutral-500 uppercase">Votes Cast</div>
                    </div>
                    <div className="p-4 bg-neutral-50 rounded-2xl">
                        <div className="text-2xl font-bold text-neutral-400 mb-1">246</div>
                        <div className="text-xs font-medium text-neutral-500 uppercase">Abstained</div>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="space-y-2">
                    <div className="flex justify-between text-xs font-bold tracking-wide">
                        <span className="text-neutral-900">Overall Turnout</span>
                        <span className="text-neutral-400">Target: 95%</span>
                    </div>
                    <div className="h-3 w-full bg-neutral-100 rounded-full overflow-hidden">
                        <div className="h-full bg-[#D5EF36] w-[84%] rounded-full" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ParticipationStats;
