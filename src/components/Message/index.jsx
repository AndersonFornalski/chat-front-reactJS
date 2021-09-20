import React from 'react';
import "./style.css";

const Message = ({ message, own }) => {
    return(
        <div className={ own ? "message own" : "message"}>
            <div className="messageTop">
                <img src="/assets/avatar/avatar7.jpg" alt="" className="messageImg" />
                <p className="messageText"> { message.text } </p>     
            </div>
            <div className="messageBottom"> 1 hora atras </div>
        </div>
    );
}

export default Message;