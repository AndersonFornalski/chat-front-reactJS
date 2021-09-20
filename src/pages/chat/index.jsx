import React from 'react';
import ChatOnline from '../../components/ChatOnline';
import Conversation from '../../components/Conversations';
import Message from '../../components/Message';
import Topbar from '../../components/TopBar';
import "./style.css";

const Chat = () => {
    return(  
        <> 
        <Topbar />     
        <div className="messenger">
            <div className="chatMenu">
                <div className="chatMenuWrapper">
                    <input className="chatMenuInput" placeholder="procure seu amigos"/>
                    <Conversation/>
                    <Conversation/>
                    <Conversation/>
                    <Conversation/>
                    <Conversation/>
                </div>
            </div>
            <div className="chatBox">
                <div className="chatBoxWrapper">
                    <div className="chatBoxTop">
                       <Message/>             
                       <Message own={true} />             
                       <Message/>             
                       <Message/>             
                       <Message/>             
                       <Message/>             
                       <Message/>             
                       <Message/>             
                       <Message/>             
                       <Message/>             
                       <Message/>             
                       <Message/>             
                       <Message/>             
                       <Message/>             
                       <Message/>             
                       <Message/>             
                       <Message/>             
                       <Message own={true}/>             
                    </div>
                    <div className="chatBoxBottom">
                        <textarea placeholder="escreva uma mensagem..." className="chatMessageInput"></textarea>
                        <button className="chatSubmitButton">Enviar</button>
                    </div>
                </div>
            </div>
            <div className="chatOnline">
                <div className="chatOnlineWrapper">
                    <ChatOnline/>
                </div>
            </div>
        </div>
        </>
    );
}

export default Chat;