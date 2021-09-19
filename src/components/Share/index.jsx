import "./style.css";
import { PermMedia } from "@material-ui/icons";

const Share = () => {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="/assets/avatar/avatar4.jpg" alt="" />
          <input
            placeholder="compartilhe seu momentos mais felizes aqui hoje!"
            className="shareInput"
          />
        </div>
        <hr className="shareHr"/>
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                    <PermMedia htmlColor="rgb(88, 73, 175)" className="shareIcon"/>
                    <span className="shareOptionText">Fotos ou Videos</span>
                </div>              
            </div>
            <button className="shareButton">Compartilhar</button>
        </div>
      </div>
    </div>
  );
}

export default Share;