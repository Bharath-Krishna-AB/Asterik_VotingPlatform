import SignIn from "./pages/SignIn";
import GetStarted from "./pages/GetStarted";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <GetStarted />
      <SignIn />
      <Signup/>
      <Navbar/>
    </div>
  );
}
