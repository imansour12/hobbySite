import React from "react";
import Serverloading from "../components/Serverloading";
import Posts from "../components/Posts";
import NewPost from "../components/NewPost";

export const isSignedIn = () => {
  if (localStorage.getItem("auth-token") === null) {
    return false;
  } else if (localStorage.getItem("auth-token") !== null) {
    return true;
  }
};

const Home = (props) => {
  if (isSignedIn()) {
    return (
      <>
        <Posts />
        <NewPost />
      </>
    );
  } else {
    return <Serverloading />;
  }
};

export default Home;
