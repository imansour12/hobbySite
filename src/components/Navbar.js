import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as ReactBootStrap from "react-bootstrap";
import "./NavbarStyles.css";
import Sound from "react-sound";
import { isSignedIn } from "../pages/Home";

// Dear Programmer:
// When I wrote this code, only god
// and I knew how it worked.
// Now only god knows it

//We do a little sound importing teehee
const differentThingOptionsSoundClick =
  "https://www.mboxdrive.com/DiffThingsOptionButtonsClick.mp3";
const HomeButtonSound = "https://www.mboxdrive.com/HomeButton.mp3";
const differentThingOptionsSoundHover =
  "https://www.mboxdrive.com/HoverOnDiffThingsOptions.mp3";
const featuresSound = "https://www.mboxdrive.com/Features.mp3";
const signInSound = "https://www.mboxdrive.com/Login.mp3";
const signUpSound = "https://www.mboxdrive.com/SignUp.mp3";

function Navbar() {
  const [homeSound, sethomeSound] = useState("STOPPED");
  const [signInSoundPlaying, setsignInSoundPlaying] = useState("STOPPED");
  const [signUpSoundPlaying, setsignUpSoundPlaying] = useState("STOPPED");
  const [featuresSoundPlaying, setfeaturesSoundPlaying] = useState("STOPPED");
  const [
    differentThingOptionsSoundClickPlaying,
    setdifferentThingOptionsSoundClickPlaying,
  ] = useState("STOPPED");
  const [
    differentThingOptionsSoundHoverPlaying,
    setdifferentThingOptionsSoundHoverPlaying,
  ] = useState("STOPPED");
  let soundAutoLoad = !isSignedIn();

  //When a button is clicked and makes sound set all other buttons states to "STOPPED"
  return (
    <div>
      <ReactBootStrap.Navbar
        collapseOnSelect
        expand="sm"
        bg="warningdfj"
        variant="dark"
      >
        <ReactBootStrap.Container>
          <ReactBootStrap.Navbar.Brand
            onClick={() => sethomeSound("PLAYING")}
            href="#home"
          >
            <Link className="basedLink" to="/">
              <Sound
                url={HomeButtonSound}
                playStatus={homeSound}
                autoLoad={true}
                onFinishedPlaying={() => sethomeSound("STOPPED")}
              />
              FNN
            </Link>
          </ReactBootStrap.Navbar.Brand>
          <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
            <ReactBootStrap.Nav className="me-auto">
              <ReactBootStrap.Nav.Link
                href="#features"
                onClick={() => setfeaturesSoundPlaying("PLAYING")}
              >
                <Link className="basedLink" to="/features">
                  <Sound
                    url={featuresSound}
                    playStatus={featuresSoundPlaying}
                    autoLoad={soundAutoLoad}
                    onFinishedPlaying={() => setfeaturesSoundPlaying("STOPPED")}
                  />
                  Features
                </Link>
              </ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link>
                <Link className="basedLink" to="/languages">
                  Change Language
                </Link>
              </ReactBootStrap.Nav.Link>
              <ReactBootStrap.NavDropdown
                title="Contributors"
                id="collasible-nav-dropdown"
                onClick={() =>
                  setdifferentThingOptionsSoundClickPlaying("PLAYING")
                }
              >
                <Sound
                  url={differentThingOptionsSoundClick}
                  playStatus={differentThingOptionsSoundClickPlaying}
                  onFinishedPlaying={() =>
                    setdifferentThingOptionsSoundClickPlaying("STOPPED")
                  }
                />
                <div
                  onMouseEnter={() =>
                    setdifferentThingOptionsSoundHoverPlaying("PLAYING")
                  }
                  onMouseLeave={() =>
                    setdifferentThingOptionsSoundHoverPlaying("STOPPED")
                  }
                >
                  <ReactBootStrap.NavDropdown.Item>
                    <Link className="basedLink" to="/action">
                      Action
                    </Link>
                  </ReactBootStrap.NavDropdown.Item>
                  <ReactBootStrap.NavDropdown.Item>
                    <Link className="basedLink" to="/anotheraction">
                      Another action
                    </Link>
                  </ReactBootStrap.NavDropdown.Item>
                  <ReactBootStrap.NavDropdown.Item>
                    <Link className="basedLink" to="/someting">
                      Something
                    </Link>
                  </ReactBootStrap.NavDropdown.Item>
                  <ReactBootStrap.NavDropdown.Divider />
                  <ReactBootStrap.NavDropdown.Item>
                    <Link className="basedLink" to="/seperatedlink">
                      Separated link
                    </Link>
                  </ReactBootStrap.NavDropdown.Item>
                  <Sound
                    url={differentThingOptionsSoundHover}
                    playStatus={differentThingOptionsSoundHoverPlaying}
                    onFinishedPlaying={() =>
                      setdifferentThingOptionsSoundHoverPlaying("STOPPED")
                    }
                    autoLoad={false}
                  />
                </div>
              </ReactBootStrap.NavDropdown>
            </ReactBootStrap.Nav>
            <ReactBootStrap.Nav>
              <ReactBootStrap.Nav.Link
                onClick={() => {
                  setsignInSoundPlaying("PLAYING");
                }}
              >
                <Link className="basedLink" to="signin">
                  <Sound
                    url={signInSound}
                    playStatus={signInSoundPlaying}
                    autoLoad={soundAutoLoad}
                    onFinishedPlaying={() => setsignInSoundPlaying("STOPPED")}
                  />
                  Sign In
                </Link>
              </ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link eventKey={2}>
                <Link
                  className="basedLink"
                  to="/signup"
                  onClick={() => {
                    setsignUpSoundPlaying("PLAYING");
                  }}
                >
                  <Sound
                    url={signUpSound}
                    playStatus={signUpSoundPlaying}
                    autoLoad={soundAutoLoad}
                    onFinishedPlaying={() => setsignInSoundPlaying("STOPPED")}
                  />
                  Sign Up
                </Link>
              </ReactBootStrap.Nav.Link>
            </ReactBootStrap.Nav>
          </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Container>
      </ReactBootStrap.Navbar>
    </div>
  );
}

export default Navbar;
