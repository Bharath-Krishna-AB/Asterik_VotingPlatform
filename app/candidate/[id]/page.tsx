'use client';
import React from 'react';
import CandidateDetails from '../../../components/CandidateDetails';
import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import BackButton from '@/components/ui/BackButton';
import Link from 'next/link';

const CandidatePage = () => {
    const params = useParams();
    const id = Number(params?.id);

    // Mock Data (In a real app, this would be fetched)
    const candidates = [
        {
            id: 1,
            name: "Bharath Krishna A B",
            imageUrl: "/images/candidate1.jpeg",
            description: "A frontend engineer focused on execution, ownership, and real-world impact. I design and ship production-ready interfaces that balance performance, reliability, and clean architecture—from concept to deployment.",
            manifesto: [
                "Production-ready. Always.",
                "Execute fast. Ship responsibly.",
                "Ownership from day one."
            ],
            education: "Frontend Stack Developer | Freelance Web Developer | Ideathon & Hackathon Winner | CSE Student | Christ College Of Engineering, Irinjalakuda",
            socials: {
                linkedin: "https://linkedin.com/in/bharathkrishnaab",
                github: "https://github.com/bharath-krishna-ab"
            }
        },
        {
            id: 2,
            name: "Navaneeth",
            imageUrl: "/images/candidate2.png",
            description: "Dedicated to operational excellence and student welfare. Navaneeth brings a practical approach to problem-solving and a passion for creating a vibrant campus culture.",
            manifesto: [
                "Improve campus transport facilities",
                "Organize regular technical and cultural workshops",
                "Enhance sports infrastructure and accessibility"
            ],
            education: "Computer Science Engineering, 3rd Year | Freelance Web Developer | Community Organizer",
            socials: {
                linkedin: "https://linkedin.com",
                github: "https://github.com"
            }
        }
    ];

    const candidate = candidates.find(c => c.id === id);

    if (!candidate) {
        return (
            <div className="min-h-screen bg-surface flex items-center justify-center font-sans">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-bold">Candidate Not Found</h1>
                    <p className="text-neutral-500">The candidate you are looking for does not exist.</p>
                    <a href="/" className="inline-block px-6 py-3 bg-black text-white rounded-xl text-sm font-bold">Go Home</a>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-surface">
            <Navbar />
            <div className="container mx-auto px-4 pt-8 mb-10">
                <Link href="/candidatepanel"><BackButton /></Link>
            </div>
            <CandidateDetails
                candidateId={candidate.id}
                name={candidate.name}
                imageUrl={candidate.imageUrl}
                description={candidate.description}
                manifesto={candidate.manifesto}
                education={candidate.education}
                socials={candidate.socials}
            />
        </div>
    );
};

export default CandidatePage;
