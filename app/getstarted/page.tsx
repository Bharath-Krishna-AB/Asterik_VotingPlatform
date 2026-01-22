"use client"

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'
import SplitText from 'gsap/SplitText'


const page = () => {

    useGSAP(() => {

        // main title 
        const titleSplit = SplitText.create(".getstarted-title", {
            type: "lines",
        })

        const tl1 = gsap.timeline({
            delay: 1
        })

        tl1.from(titleSplit.lines, {
            opacity: 0,
            yPercent: 30,
            stagger: 0.07,
            ease: "power2.out"
        })

        tl1.from(".getstarted-logo", {
            opacity: 0,
            scale: 0,
            ease: "back.out(1.7)",
            duration: 0.6
        }, "-=0.4")

        // subtitle animation 
        const subtitleSplit = SplitText.create(".getstarted-subtitle", {
            type: "lines",
        })

        tl1.from(subtitleSplit.lines, {
            opacity: 0,
            y: 10,
            stagger: 0.2,
            ease: "power2.out",
        })

        // button animation 

        const buttonSplit = SplitText.create(".getstarted-btn-text", {
            type: "words",
        })

        tl1.from(buttonSplit.words, {
            opacity: 0,
            y: 20,
            stagger: 0.05,
            ease: "power2.out",
        })

        tl1.from(".getstarted-btn-icon", {
            opacity: 0,
            scale: 0,
            ease: "back.out(1.7)",
            duration: 0.6
        }, "-=0.4")

        // hero image animation 

        const tl2 = gsap.timeline({
            delay: 2
        })

        tl2.from(".getstarted-hero-image", {
            opacity: 0,
            y: 20,
            ease: "power2.inOut",
        })






    })

    const handleMouseEnterArrow = () => {
        gsap.to(".getstarted-btn-icon", {
            rotate: -45,
            duration: 0.3,
            ease: "power1.inOut",
        })
    }

    const handleMouseLeaveArrow = () => {
        gsap.to(".getstarted-btn-icon", {
            rotate: 0,
            duration: 0.3,
            ease: "power1.inOut",
        })
    }

    const handleMouseEnterIcon = () => {
        gsap.to(".getstarted-logo", {
            rotate: 12,
            duration: 0.3,
            ease: "power1.inOut",
        })
    }

    const handleMouseLeaveIcon = () => {
        gsap.to(".getstarted-logo", {
            rotate: -6,
            duration: 0.3,
            ease: "power1.inOut",
        })
    }

    return (
        <main className="w-full min-h-screen bg-primary flex flex-col md:flex-row font-sans p-5 overflow-x-hidden selection:bg-black selection:text-primary">
            <div className="w-full h-[60vh] md:w-[55vw] md:h-screen flex justify-center items-end">
                <img src="/images/GetStarted-Hero1.png" alt="GetStartedHero" className='getstarted-hero-image w-[80%] h-[80%] object-contain select-none' />
            </div>

            <div className="w-full h-auto min-h-[40vh] md:w-[45vw] md:h-screen flex flex-col justify-center items-center md:items-start gap-10 py-10 md:py-0">
                <div className="flex flex-col gap-4 text-center md:text-left">
                    <div className='font-[1000] text-5xl md:text-7xl leading-tight tracking-tighter text-neutral-900 font-clash-display getstarted-title'>
                        {/* Row 1 */}
                        <div className='flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-2'>
                            <span className=" inline-block">Where</span>
                            <span className=" inline-block">Every</span>
                            <span className=" inline-block">Vote</span>

                            <div onMouseEnter={handleMouseEnterIcon} onMouseLeave={handleMouseLeaveIcon} className="getstarted-logo w-16 h-16 rounded-xl bg-black flex items-center justify-center -rotate-6 hover:rotate-12 shadow-2xl shadow-neutral-200 cursor-pointer">
                                <Sparkles className="text-primary w-8 h-8" />
                            </div>
                        </div>

                        {/* Row 2 */}
                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 mt-2">
                            <span className="inline-block">Actually</span>
                            <span className="inline-block">Counts.</span>
                        </div>
                    </div>

                    <p className='font-medium text-base md:text-lg text-gray-700 max-w-md leading-relaxed getstarted-subtitle'>
                        Every vote is a voice. This platform exists to make sure none of them are lost.
                    </p>
                </div>

                <Link href="/signin">
                    <button onMouseEnter={handleMouseEnterArrow} onMouseLeave={handleMouseLeaveArrow} className="getstarted-btn flex items-center gap-4 group cursor-pointer">
                        <p className='getstarted-btn-text font-medium text-lg md:text-xl border-b-2 border-transparent group-hover:border-black'>Get Started!</p>
                        <div className='getstarted-btn-icon w-14 h-14 flex items-center justify-center bg-black rounded-full group-hover:scale-110 '>
                            <ArrowRight size={28} className='text-primary ' />
                        </div>
                    </button>
                </Link>
            </div>
        </main>
    )
}

export default page