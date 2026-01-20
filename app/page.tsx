import SignIn from "./pages/SignIn";
import GetStarted from "./pages/GetStarted";
import Signup from "./pages/Signup";
import CandidatePanel from "./pages/CandidatePanel";

export default function Home() {
  return (
    <div>
      <GetStarted />
      <SignIn />
      <Signup />
      <CandidatePanel />
    </div>
  );
}
