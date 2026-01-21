import { ArrowRight, Asterisk } from 'lucide-react'

const page = () => {
    return (
        <main className="w-full min-h-screen bg-primary flex flex-col md:flex-row font-[Panchang,sans-serif] p-5 overflow-x-hidden selection:bg-black selection:text-primary">
            <div className="w-full h-[60vh] md:w-[55vw] md:h-screen flex justify-center items-end">
                <img src="/images/GetStarted-Hero1.png" alt="GetStartedHero" className='w-[80%] h-[80%] object-contain select-none' />
            </div>
            <div className="w-full h-auto min-h-[40vh] md:w-[45vw] md:h-screen flex flex-col justify-center items-center md:items-start gap-10 py-10 md:py-0">
                <div className="flex flex-col gap-4 text-center md:text-left">
                    <div className='font-bold text-5xl md:text-7xl leading-tight tracking-tighter text-neutral-900 '>
                        <span className='flex flex-wrap items-center justify-center md:justify-start gap-3 md:gap-8'>
                            Where Every Vote
                            <div className="w-16 h-16 rounded-2xl bg-black flex items-center justify-center rotate-6 hover:rotate-12 transition-transform duration-300 shadow-lg shadow-primary/20">
                                <Asterisk className="text-primary w-8 h-8" />
                            </div>
                        </span>
                        Actually Counts.
                    </div>
                    <p className='font-medium text-base md:text-lg text-gray-700 max-w-md leading-relaxed'>
                        Every vote is a voice. This platform exists to make sure none of them are lost.
                    </p>
                </div>
                <div className="flex items-center gap-4 group cursor-pointer">
                    <p className='font-medium text-lg md:text-xl border-b-2 border-transparent group-hover:border-black transition-all'>Get Started!</p>
                    <button className='w-14 h-14 flex items-center justify-center bg-black rounded-full group-hover:scale-110 transition-transform'>
                        <ArrowRight size={28} className='text-primary duration-300 group-hover:-rotate-45 transition-transform' />
                    </button>
                </div>
            </div>
        </main>
    )
}

export default page