"use client";

import { ArrowLeft } from 'lucide-react';

const BackButton = () => {

    return (
        <button
            className="group flex items-center gap-2 pl-2 pr-5 py-2 bg-white/50 backdrop-blur-sm border border-neutral-200 hover:border-black rounded-full transition-all duration-300 hover:bg-white hover:shadow-lg hover:shadow-black/5 active:scale-95"
        >
            <div className="w-8 h-8 rounded-full bg-black text-primary flex items-center justify-center group-hover:-translate-x-1 transition-transform duration-300">
                <ArrowLeft className="w-4 h-4" />
            </div>
            <span className="font-clash-display font-semibold text-sm uppercase tracking-wider text-neutral-600 group-hover:text-black transition-colors">
                Go Back
            </span>
        </button>
    );
};

export default BackButton;
