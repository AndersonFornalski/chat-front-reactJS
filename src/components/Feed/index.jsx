import Post from "../Post";
import Share from "../Share";
import "./style.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Feed = () => {
  const [ posts, setPosts ] = useState([]);

  useEffect( async() => {
    const fetchPost = async () => {
      const response = await axios.get("posts/timeline/6145f7ad03a10efa49a79d3f")
      console.log(response.data);
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