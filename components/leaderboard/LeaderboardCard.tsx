import React from 'react';
import { Trophy } from 'lucide-react';

interface LeaderboardCardData {
    rank: number;
    name: string;
    votes: number;
    percentage: number;
    imageUrl?: string;
}

const LeaderboardCard: React.FC<LeaderboardCardData> = ({ rank, name, votes, percentage, imageUrl }) => {
    return (
        <div className="group relative w-full bg-white border border-neutral-200 rounded-[20px] p-4 flex items-center gap-4 shadow-sm hover:shadow-md transition-all">
            {/* Rank Indicator */}
            <div className={`
                flex items-center justify-center w-12 h-12 rounded-xl font-black text-xl font-clash-display
                ${rank === 1 ? 'bg-primary text-black border border-black' :
                    rank === 2 ? 'bg-neutral-200 text-neutral-600' :
                        rank === 3 ? 'bg-orange-100 text-orange-600' : 'bg-neutral-100 text-neutral-400'}
            `}>
                {rank}
            </div>

            {/* Avatar */}
            <div className="w-12 h-12 rounded-full bg-neutral-100 overflow-hidden border border-neutral-200">
                {imageUrl ? (
                    <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-neutral-300">
                        <Trophy className="w-5 h-5" />
                    </div>
                )}
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
                <h3 className="font-bold text-neutral-900 truncate font-clash-display">{name}</h3>
                <div className="flex items-center gap-2 text-sm text-neutral-500">
                    <span className="font-medium bg-neutral-100 px-1.5 rounded text-neutral-600">
                        {votes.toLocaleString()} votes
                    </span>
                    <span className="text-xs">• {percentage}% share</span>
                </div>
            </div>

            {/* Progress */}
            <div className="text-right flex flex-col items-end gap-1">
                <div className="w-24 h-1.5 bg-neutral-100 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-black rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${percentage}%` }}
                    />
                </div>
            </div>

            {/* Hover Effect Border */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-[20px] transition-colors pointer-events-none" />
        </div>
    );
};

export default LeaderboardCard;
