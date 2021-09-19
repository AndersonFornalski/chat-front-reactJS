import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import "./style.css";
import { AuthContext } from "../../context/AuthContext";

export const Topbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{textDecoration:"none"}}>
          <span className="logo">Bate-Papo Social</span> 
        </Link>
      </div>
       <Link to={`/profile/${user.username}`}>
        <img 
          src={ 
            user.profilePicture 
            ? user.profilePicture 
            :  "/assets/avatar/noAvatar.png" } 
            alt="" 
            className="topbarImg"/>
        </Link> 
     
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