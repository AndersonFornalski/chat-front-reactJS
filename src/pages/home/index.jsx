import "./style.css"
import TopBar from "../../components/TopBar";
import Sidebar from "../../components/SideBar";
import Feed from "../../components/Feed";
import Rightbar from "../../components/RightBar";

const Home = () => {
  return (
    <>
      <TopBar />
      <div className="homeContainer">
        <Sidebar />
        <Feed/>
        <Rightbar/>
      </div>
    </>
  );
}

export default Home;