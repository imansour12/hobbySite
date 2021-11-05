import React from "react";
import Serverloading from "../components/Serverloading";
import Post from "../components/Post";

// Dear Programmer:
// When I wrote this code, only god
// and I knew how it worked.
// Now only god knows it

// Therefore if you are trying to optimize
// this routine and it fails (most surely),
// please increase this counter as a warning for
// the next person:

// total_hours_wasted_here = 254

//check if authkey exists in local storage
//if it does not exist, redirect to login page
//if it does exist, render the home page

export const isSignedIn = () => {
  if (localStorage.getItem("auth-key") === null) {
    return false;
  } else if (localStorage.getItem("auth-key") !== null) {
    return true;
  }
};
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
