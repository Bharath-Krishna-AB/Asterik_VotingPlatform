import Login from "./pages/Login";
import Signup from "./pages/Signup";
import GetStarted from "./pages/GetStarted";

export default function Home() {
  return (
    <div>
      <GetStarted />
      <Login />
      <Signup />
    </div>
  );
}
