import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "./Post";
import LoadingAnimation from "./LoadingAnimation";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
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
    setLoading(false);
    setPosts(res.data);
  };

  if (loading) {
    return <LoadingAnimation />;
  } else {
    return posts.map((post) => {
      return <Post moment={post} />;
    });
  }
};

export default Posts;
