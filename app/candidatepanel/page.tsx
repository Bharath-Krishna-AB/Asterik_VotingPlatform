import Navbar from '../../components/Navbar'
import Candidate from '../../components/Candidate'

interface candidatePanelData {
    candidateId: number;
    name: string;
    imageUrl: string;
    description: string;
    LinkedInUrl: string;
}

const page: React.FC = () => {

    const candidateData: candidatePanelData[] = [
        {
            candidateId: 1,
            name: "Bharath Krishna A B",
            imageUrl: "/images/candidate1.jpeg",
            description: "MERN Stack Developer | Freelance Web Developer | Ideathon & Hackathon Winner | CSE Student",
            LinkedInUrl: "https://www.linkedin.com/in/bharathkrishnaab/"
        },
        {
            candidateId: 2,
            name: "Navaneeth R",
            imageUrl: "/images/candidate2.png",
            description: "MERN Stack Developer | Freelance Web Developer | Ideathon & Hackathon Winner | CSE Student",
            LinkedInUrl: "https://www.linkedin.com/in/navaneeth-r-b55389387/"
        }
    ]

    return (
        <div className="min-h-screen w-full bg-surface font-[panchang,sans-serif] selection:bg-primary selection:text-black">
            <Navbar />

            <main className="container mx-auto px-4 py-8 md:py-16">
                {/* Page Header */}
                <div className="flex flex-col items-center text-center space-y-4 mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold  tracking-tighter text-neutral-900 uppercase">
                        Meet the Candidates <span className="text-primary">.</span>
                    </h1>
                    <p className="max-w-xl text-neutral-500 font-medium leading-relaxed">
                        Discover the visionaries shaping our future. Review their profiles, manifestos, and track records before casting your vote.
                    </p>
                </div>

                {/* Candidates Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
                    {candidateData.map((candidate) => (
                        <Candidate
                            key={candidate.candidateId}
                            candidateId={candidate.candidateId}
                            name={candidate.name}
                            imageUrl={candidate.imageUrl}
                            description={candidate.description}
                            LinkedInUrl={candidate.LinkedInUrl}
                        />
                    ))}
                </div>
            </main>
        </div>
    )
}

export default page