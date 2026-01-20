import Login from "./pages/Login";
import GetStarted from "./pages/GetStarted";
import Signup from "./pages/Signup";

export default function Home() {
  return (
    <div>
      <GetStarted />
      <Login />
      <Signup/>
    </div>
  );
}
