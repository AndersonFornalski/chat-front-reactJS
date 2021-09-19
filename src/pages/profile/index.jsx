import "./style.css";
import Topbar from "../../components/TopBar";
import Sidebar from "../../components/SideBar";
import Feed from "../../components/Feed";
import Rightbar from "../../components/RightBar";

const Profile = () => {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="assets/posts/post4.jpg"
                alt=""
              />
              <img
                className="profileUserImg"
                src="assets/avatar/avatar2.jpg"
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Anderson Fornalski</h4>
                <span className="profileInfoDesc">Beleza galera do bem!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;