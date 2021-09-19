import "./style.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";

export const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">SocialChat</span> 
      </div>
      <img src="/assets/avatar/avatar8.jpg" alt="" className="topbarImg"/>
     
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Home</span>          
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">              
            <Person />
            <span className="topbarIconBadge">5</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">10</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">3</span>
          </div>
        </div>        
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


    </div>
  );
}

export default Topbar;