import "./style.css";
import { RssFeed, Chat, PlayCircleFilledOutlined, Group } from "@material-ui/icons";
import { Users } from "../../Data";        
import CloseFriend from "../CloseFriend";
        

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Noticias</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilledOutlined className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sidebarListItemText">Grupos</span>
          </li>
        </ul>
        <button className="sidebarButton">Mostrar Mais</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {Users.map((u) => (
              <CloseFriend key={u.id} user={u} />
          ))}          
        </ul>
      </div>
    </div>
  );
}


export default Sidebar;