import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "./Post";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchPosts();
  }, []);
  const fetchPosts = async () => {
    const authtoken = localStorage.getItem("auth-token");
    const res = await axios.get(
      "https://fakenewsnetwork.herokuapp.com/api/post",
      {
        headers: {
          "Content-Type": "application/json",
          "auth-token": authtoken,
        },
      }
    );
    setPosts(res.data);
  };

  return posts.map((post) => {
    return <Post moment={post} />;
  });
};

export default Posts;
