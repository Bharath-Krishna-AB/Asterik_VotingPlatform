import React from 'react'
import Navbar from '../../components/Navbar'
import Candidate from '../../components/Candidate'

const CandidatePage = () => {
    return (
        <div className="bg-foreground w-screen">
            <Navbar />
            <div className="grid grid-cols-3 gap-4 place-items-center">
                <Candidate />
                <Candidate />
            </div>
        </div>
    )
}

export default CandidatePage