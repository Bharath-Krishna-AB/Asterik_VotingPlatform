'use client';
import React from 'react';
import CandidateDetails from '../../../components/CandidateDetails';
import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';

const CandidatePage = () => {
    const params = useParams();
    const id = Number(params?.id);

    // Mock Data (In a real app, this would be fetched)
    const candidates = [
        {
            id: 1,
            name: "Bharath Krishna A B",
            role: "Presidential Candidate",
            imageUrl: "/images/candidate1.jpeg",
            description: "A visionary leader committed to fostering innovation and inclusivity. With a strong background in technology and community service, Bharath aims to bridge the gap between students and administration.",
            manifesto: [
                "Establish a 24/7 student support helpline",
                "Digitalize campus voting and feedback systems",
                "Launch a mentorship program for first-year students"
            ],
            education: "Computer Science Engineering, 3rd Year | MERN Stack Developer | Hackathon Winner",
            socials: {
                linkedin: "https://linkedin.com/in/bharathkrishnaab",
                github: "https://github.com/bharathkrishnaab"
            }
        },
        {
            id: 2,
            name: "Navaneeth",
            role: "Vice-Presidential Candidate",
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
            <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center font-[panchang,sans-serif]">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-bold">Candidate Not Found</h1>
                    <p className="text-neutral-500">The candidate you are looking for does not exist.</p>
                    <a href="/" className="inline-block px-6 py-3 bg-black text-white rounded-xl text-sm font-bold">Go Home</a>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-[#FAFAFA]">
            <Navbar />
            <CandidateDetails
                candidateId={candidate.id}
                name={candidate.name}
                role={candidate.role}
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
