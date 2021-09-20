import React from 'react';
import "./style.css";

const Message = ({ own }) => {
    return(
        <div className={ own ? "message own" : "message"}>
            <div className="messageTop">
                <img src="/assets/avatar/avatar7.jpg" alt="" className="messageImg" />
                <p className="messageText">adkfjaiufoavfuoifuofiunvnofiuanovifuivaf</p>     
            </div>
            <div className="messageBottom"> 1 hora atras </div>
        </div>
    );
}

export default Message;