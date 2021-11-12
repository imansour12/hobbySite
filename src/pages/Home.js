import React from "react";
import Serverloading from "../components/Serverloading";
import Posts from "../components/Posts";

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
  if (localStorage.getItem("auth-token") === null) {
    return false;
  } else if (localStorage.getItem("auth-token") !== null) {
    return true;
  }
};

const Home = (props) => {
  if (isSignedIn()) {
    return <Posts />;
  } else {
    return <Serverloading />;
  }
};

export default Home;
