import { ArrowRight } from 'lucide-react'

const GetStarted = () => {
  return (
    <main className="GetStarted">
        <div className="GetStarted-hero-section">
            <img src="/images/GetStartedHero.png" alt="GetStartedHero" />
        </div>
        <div className="getStarted-content">
            <div className="getStarted-content-top">
                Where Every Vote Actually Counts.
                Every vote is a voice. This platform exists to make sure none of them are lost.
            </div>
            <div className="getStarted-content-bottom">
                <p>Get Started!</p>
                <button><ArrowRight/></button>
            </div>
        </div>
    </main>
  )
}

export default GetStarted