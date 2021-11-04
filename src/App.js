//Import dependencies
import { Switch, Route } from "react-router";
import React from "react";
//Import components
import VideoBackground from "./components/VideoBackground";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SiteBrokey from "./pages/SiteBrokey";
import ChangeLanguages from "./pages/ChangeLanguages";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

// console.log(
//   `░░░░░▄▄▄▄▀▀▀▀▀▀▀▀▄▄▄▄▄▄░░░░░░░
// ░░░░░█░░░░▒▒▒▒▒▒▒▒▒▒▒▒░░▀▀▄░░░░
// ░░░░█░░░▒▒▒▒▒▒░░░░░░░░▒▒▒░░█░░░
// ░░░█░░░░░░▄██▀▄▄░░░░░▄▄▄░░░░█░░
// ░▄▀▒▄▄▄▒░█▀▀▀▀▄▄█░░░██▄▄█░░░░█░
// █░▒█▒▄░▀▄▄▄▀░░░░░░░░█░░░▒▒▒▒▒░█
// █░▒█░█▀▄▄░░░░░█▀░░░░▀▄░░▄▀▀▀▄▒█
// ░█░▀▄░█▄░█▀▄▄░▀░▀▀░▄▄▀░░░░█░░█░
// ░░█░░░▀▄▀█▄▄░█▀▀▀▄▄▄▄▀▀█▀██░█░░
// ░░░█░░░░██░░▀█▄▄▄█▄▄█▄████░█░░░
// ░░░░█░░░░▀▀▄░█░░░█░█▀██████░█░░
// ░░░░░▀▄░░░░░▀▀▄▄▄█▄█▄█▄█▄▀░░█░░
// ░░░░░░░▀▄▄░▒▒▒▒░░░░░░░░░░▒░░░█░
// ░░░░░░░░░░▀▀▄▄░▒▒▒▒▒▒▒▒▒▒░░░░█░
// ░░░░░░░░░░░░░░▀▄▄▄▄▄░░░░░░░░█░░` + "You seem to be a little lost"
// );

function App() {
  return (
    <>
      <Navbar />
      <VideoBackground />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/sitebrokey" compoenent={SiteBrokey} />
        <Route path="/languages" component={ChangeLanguages} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
      </Switch>
    </>
  );
}

export default App;
