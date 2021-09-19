import "./style.css";
import { Users } from "../../Data";
import Online from "../Online";

const Rightbar = ({ user }) => {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/icon/coracao.png" alt="" />
          <span className="birthdayText">
            <b>Florisbela</b> e <b>3 outros amigos</b> estao de aniversario hoje.
          </span>
        </div>
        <img className="rightbarAd" src="assets/icon/like.png" alt=""/>
        <h4 className="rightbarTitle">Amigos Online</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
              <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">Informacao do usuario</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Cidade:</span>
            <span className="rightbarInfoValue">{ user.city }</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">De:</span>
            <span className="rightbarInfoValue">{ user.from }</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relacionamento:</span>
            <span className="rightbarInfoValue">{ user.relationship }</span>
          </div>
        </div>
        <h4 className="rightbarTitle">Amigos</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="assets/avatar/avatar1.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Marilandia</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/avatar/avatar2.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Felizberta</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/avatar/avatar3.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Morus</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/avatar/avatar4.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Pirado</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/avatar/avatar5.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Maluquete</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/avatar/avatar6.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Lontra</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        { user ? <ProfileRightbar /> : <HomeRightbar /> }
      </div>
    </div>
  );
}

export default Rightbar;