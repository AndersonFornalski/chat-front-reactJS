import React from 'react';
import Topbar from '../../components/TopBar';
import "./style.css";

const Chat = () => {
    return(  
        <> 
        <Topbar />     
        <div className="messenger">
            <div className="chatMenu">Menu</div>
            <div className="chatBox">Box</div>
            <div className="chatOnline">Online</div>
        </div>
        </>
    );
}

export default Chat;