import "./style.css";
import { MoreVert } from "@material-ui/icons";
import { useContext, useEffect, useState } from "react";
import { format } from "timeago.js";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Post = ({ post }) => {
  const [ like, setLike ] = useState(post.likes.length);
  const [ isLiked, setIsLiked ] = useState(false);
  const [ user, setUser ] = useState({});
  const { user: currentUser } = useContext(AuthContext);

  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id))
  },[currentUser._id, post.likes]);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`/users?userId=${post.userId}`)
      setUser(response.data)
      console.log(response.data)
    };
    fetchUser()
  },[post.userId]);
  
  const likeHandler = () => {
    try {
      axios.put("/posts/" + post._id + "/like", { userId: currentUser._id});
    } catch (error) { }
    setLike( isLiked ? like-1 : like + 1)
    setIsLiked( !isLiked )
    
  }
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`/profile/${user.username}`}>
            <img
              className="postProfileImg"
              src={ user.profilePicture || "/assets/avatar/noAvatar.png"}
              alt=""
              />
             </Link>
            <span className="postUsername">
              { user.username }
            </span>
            <span className="postDate">{ format(post.createdAt) }</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{ post?.desc }</span>
          <img className="postImg" src={ post.img } alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="/assets/icon/like.png" onClick={likeHandler} alt="" />
            <img className="likeIcon" src="/assets/icon/coracao.png" onClick={likeHandler} alt="" />
            <span className="postLikeCounter">{like} Pessoas gostaram disso </span>  
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comentarios </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;