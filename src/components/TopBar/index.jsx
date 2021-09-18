import "./style.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";

export const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">SocialChat</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="pesquise por amigos, post ou video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Home</span>
          <span className="topbarLink">Time</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">              
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="/assets/avatar/avatar8.jpg" alt="" className="topbarImg"/>
      </div>
    </div>
  );
}

export default Topbar;