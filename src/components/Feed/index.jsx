import Post from "../Post";
import Share from "../Share";
import "./style.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Feed = ({ username }) => {
  const [ posts, setPosts ] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const response = username
      ? await axios.get("posts/profile/" + username)
      : await axios.get("posts/timeline/6145f7ad03a10efa49a79d3f")
      setPosts(response.data);
    };
    fetchPost();
  },[])

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
}

export default Feed;