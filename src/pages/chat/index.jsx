import { CircularProgress } from '@material-ui/core';
import axios from 'axios';
import React, { useContext, useEffect, useRef, useState } from 'react';
import ChatOnline from '../../components/ChatOnline';
import Conversation from '../../components/Conversations';
import Message from '../../components/Message';
import Topbar from '../../components/TopBar';
import { AuthContext } from '../../context/AuthContext';
import { io } from "socket.io-client";
import "./style.css";

const Chat = () => {
    const [ conversations, setConversations ] = useState([]);
    const [ currentChat, setCurrentChat ] = useState(null);
    const [ messages, setMessages ] = useState([]);
    const [ newMessage, setNewMessage ] = useState("");
    const [ socket, setSocket ] = useState(null);
    const { user } = useContext(AuthContext);
    const scrollRef = useRef();

    useEffect(() => {
        setSocket(io("ws://localhost:3021"))
    },[])

    useEffect(() => {
        const getConversations = async () => {
            try {
                const response = await axios.get("/conversations/" + user._id)
                setConversations(response.data)
                } catch (err) {
                console.log(err)
            }
        }
        getConversations();
    },[user._id]);

    useEffect(() => {
        const getMessages = async () => {
            try {
                const response = await axios.get("/messages/" + currentChat?._id);
                setMessages(response.data)
                console.log(response.data);                
            } catch (err) {
                console.log(err)
            }
        }
        getMessages();
    },[currentChat])

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth"})
    },[messages])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const message = {
            sender: user._id,
            text: newMessage,
            conversationId: currentChat._id
        }
        try {
            const response = await axios.post("/messages", message);
            setMessages([...messages, response.data]);
            console.log(response.data);
        } catch (err) {
            console.log(err)
        }        
    };

    return(  
        <> 
        <Topbar />     
        <div className="messenger">
            <div className="chatMenu">
                <div className="chatMenuWrapper">
                    <input className="chatMenuInput" placeholder="procure seu amigos"/>
                    { conversations.map((conv) => (
                       <div key={conv._id} onClick={() => setCurrentChat(conv)}>
                           <Conversation 
                                    conversation={conv}
                                    currenteUser={user} />
                       </div> 
                    ))}
                </div>
            </div>
            <div className="chatBox">
                <div className="chatBoxWrapper">
                    {
                        currentChat ? (
                    <>                    
                    <div className="chatBoxTop">
                    {messages.map((m) => (
                       <div ref={scrollRef}>
                        <Message
                               key={m._id}
                               message={m}
                               own={m.sender === user._id}/>             
                       </div> 
                     ))}
                    </div>
                       
                    <div className="chatBoxBottom">
                        <textarea 
                            required 
                            placeholder="escreva uma mensagem..." 
                            className="chatMessageInput"
                            onChange={(e) => setNewMessage(e.target.value) }
                            value={newMessage} >                                                                               
                            </textarea>
                         <button  onClick={handleSubmit} type="submit" className="chatSubmitButton">Enviar</button>
                    </div>
                    </>) : 
                        (<span className="noConversationTexto">conversa aberta pode comecar o chat.</span>)
                    }
                </div>
            </div>
            <div className="chatOnline">
                <div className="chatOnlineWrapper">
                    <ChatOnline/>
                    <ChatOnline/>
                    <ChatOnline/>
                    <ChatOnline/>
                </div>
            </div>
        </div>
        </>
    );
}

export default Chat;