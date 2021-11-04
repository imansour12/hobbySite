import React from "react";
import axios from "axios";

const fetchData = async () => {
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
  console.log(res.data);
};

function Post() {
  return (
    <div>
      I'm not gonna wipe my app
      <button onClick={fetchData}></button>
    </div>
  );
}

export default Post;
