import "./style.css";
import Topbar from "../../components/TopBar";
import Sidebar from "../../components/SideBar";
import Feed from "../../components/Feed";
import Rightbar from "../../components/RightBar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

const Profile = () => {
  const [ user, setUser ] = useState({})
  const username = useParams().username;

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`/users?username=${username}`)
      setUser(response.data)
    };
    fetchUser()
  },[username]);

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
                src={ user.coverPicture || "assets/avatar/noAvatar.png" }
                alt=""
              />
              <img
                className="profileUserImg"
                src="assets/avatar/avatar2.jpg"
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">{ user.username }</h4>
                <span className="profileInfoDesc">{ user.desc }</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={username}/>
            <Rightbar user={ user }/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;