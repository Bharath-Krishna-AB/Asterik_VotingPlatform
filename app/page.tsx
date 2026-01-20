import SignIn from "./pages/SignIn";
import GetStarted from "./pages/GetStarted";
import Signup from "./pages/Signup";

export default function Home() {
  return (
    <div>
      <GetStarted />
      <SignIn />
      <Signup/>
    </div>
  );
}
