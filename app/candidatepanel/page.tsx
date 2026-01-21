import Navbar from '../../components/Navbar'
import Candidate from '../../components/Candidate'

interface candidatePanelData {
    candidateId: number;
    name: string;
    imageUrl: string;
    description: string;
}

const page:React.FC = () => {

    const candidateData:candidatePanelData[] = [
        {    
            candidateId: 1,       
            name: "Bharath Krishna A B",
            imageUrl: "/images/candidate1.jpg",
            description: "MERN Stack Developer | Freelance Web Developer | Ideathon & Hackathon Winner | CSE Student",
        },
        {
            candidateId: 2,
            name: "Navaneeth",
            imageUrl: "/images/candidate2.jpg",
            description: "MERN Stack Developer | Freelance Web Developer | Ideathon & Hackathon Winner | CSE Student",
        }
    ]

    return (
        <div className="bg-foreground w-screen">
            <Navbar />
            <div className="grid grid-cols-3 gap-4 place-items-center">
                {candidateData.map((candidate) => (
                    <Candidate key={candidate.candidateId} candidateId={candidate.candidateId} name={candidate.name} imageUrl={candidate.imageUrl} description={candidate.description} />
                ))}
            </div>
        </div>
    )
}

export default page