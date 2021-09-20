import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./style.css";

const Conversation = ({ conversation, currenteUser }) => {
    const [ user, setUser ] = useState(null);

    useEffect(() => {
        const friendId = conversation.members.find( (member) => member !== currenteUser._id );
        const getUser = async () => {
            try {
                const response = await axios.get("/users?userId=" + friendId )
                setUser(response.data);
            } catch (err) {
                throw(err);
            }
        };
        getUser();
    },[conversation, currenteUser])
    return(
        <div>
            <div className="conversation">
                <img src={ user?.profilePicture || "/assets/avatar/noAvatar.png"} alt="" className="conversationImg"/>
                <span className="conversationName"> { user?.username }</span>
            </div>
        </div>
    );
}

export default Conversation;