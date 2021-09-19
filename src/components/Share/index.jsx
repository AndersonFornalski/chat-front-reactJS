import { useContext, useRef, useState} from "react";
import { PermMedia } from "@material-ui/icons";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import "./style.css";

const Share = () => {
  const { user } = useContext(AuthContext);
  const desc = useRef();
  const [ file, setFile ] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault()
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };
    if( file ){
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append( "fileImage", file );
      data.append( "name", fileName );
      newPost.img = fileName;
      try {
        await axios.post("/upload", data )
      } catch (err) {
        throw(err)
      }
    }

    try {
     await axios.post("/posts", newPost );
      console.log(newPost)
    } catch (err) {
      throw(err)  
    }
  }
  
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img 
            className="shareProfileImg" 
            src={ user.profilePicture 
                ? user.profilePicture 
                : "/assets/avatar/avatar6.jpg" } 
                 alt="" />
          <input
            placeholder={"O que voce esta pensando hoje " + user.username + " ? "}
            className="shareInput"
            ref={desc}
          />
        </div>
        <hr className="shareHr"/>
        <form className="shareBottom" onSubmit={submitHandler}>
            <div className="shareOptions">
                <label htmlFor="fileImage" className="shareOption">
                    <PermMedia htmlColor="rgb(88, 73, 175)" className="shareIcon"/>
                    <span className="shareOptionText">Fotos ou Videos</span>
                    <input 
                        style={{display:"none"}}
                        type="file" 
                        id="fileImage" 
                        accept=".png, .jpeg, .jpg" 
                        onChange={(e) => setFile(e.target.files[0])} />
                </label>              
            </div>
            <button type="submit" className="shareButton">Postar</button>
        </form>
      </div>
    </div>
  );
}

export default Share;