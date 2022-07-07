//import logo from './logo.svg';
import MainNavbar from "./Components/Navbar/MainNavbar";
import "./App.css";
import Earning from "./Components/Earning";
import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "./Components/SuggestedProject/Cards";
import SuggestedProject from "./Components/SuggestedProject/SuggestedProject";
import Slacks from "./Components/Slack/Slack";
import Activity from "./Components/LastPart/Activity";
// import ActivityBox from "./Components/LastPart/ActivityBox";
import TopEarners from "./Components/LastPart/TopEarners";
import LastPart from "./Components/LastPart/LastPart";
import LastPartHead from "./Components/LastPart/LastPartHead";
import TopNavbar from "./Components/Navbar/TopNavbar";
import Combine from "./Components/Navbar/Combine";
function App() {
  return (
    <>
      <Combine />
      <div className="body">
        <div className="container">
          <Earning />
          <SuggestedProject />
          <Slacks />
          <LastPartHead />
        </div>
      </div>
    </>
  );
}

export default App;
