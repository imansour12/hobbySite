import React from "react";
import Serverloading from "../components/Serverloading";
import Post from "../components/Post";

const Home = (props) => {
  return (
    <>
      {/*YES I TRIED TO DO CONDITONAL RENDERING, NO IT DID NOT WORK SO UNLESS YOU *CAN* MAKE IT WORK PLEASE BE QUIET. I JUST LOST AN HOUR TRYING TO DO THIS AND I WOKED TOO LONG FOR THE AUDIO SO BOTH ARE STAYING  */}
      <Serverloading />
      <Post />
    </>
  );
};

export default Home;

//{&& token !== undefined*/}
