import React from 'react';
import "./style.css";

const ChatOnline = () => {
    return(
        <div className="chatOnline">
        <div className="chatOnlineFriend">
          <div className="chatOnlineImgContainer">
            <img
              className="chatOnlineImg"
              src="/assets/avatar/avatar8.jpg"/>
            <div className="chatOnlineBadge"></div>
          </div>
          <span className="chatOnlineName">Rivoalda Da Silva</span>
        </div>
    </div>
    );
}

export default ChatOnline;