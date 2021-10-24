import { React, useState } from "react";
import { Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Sound from "react-sound";

//Until some genius comes up with a solution, this is how we're doing it.
const IMetSarahInTheBathroom =
  "https://www.mboxdrive.com/awfultune - I Met Sarah in the Bathroom (prod. kazuyo).mp3";
const BlackOutDays =
  "https://www.mboxdrive.com/Phantogram - Black Out Days (Future Islands Remix_Audio) [Q-qgMT1QrwQ].mp3";
const Ultraviolence =
  "https://www.mboxdrive.com/Lana Del Rey - Ultraviolence (Audio).mp3";
const FiveOFive =
  "https://www.mboxdrive.com/505 - arctic monkeys (slowed + reverb).mp3";
const BloomLater = "https://www.mboxdrive.com/Jesse - Bloom Later (Audio).mp3";
const songs = [
  Ultraviolence,
  BlackOutDays,
  BloomLater,
  IMetSarahInTheBathroom,
  FiveOFive,
];
let songToPlay = songs[Math.floor(Math.random() * songs.length)];

const handleSongFinishedPlaying = () => {
  let songToPlay = songs[Math.floor(Math.random() * songs.length)];
  return songToPlay;
};

function Serverloading() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [color, setColor] = useState("secondary");
  const colors = [
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ];

  setTimeout(function () {
    setColor(colors[Math.floor(Math.random() * colors.length)]);
  }, 2000);

  return (
    <div style={{ marginTop: "5%", marginLeft: "5%" }}>
      <Spinner variant={color} animation="grow" size="sm" />
      <Spinner variant={color} animation="grow" />
      <h1 style={{ color: "white" }}>
        We are stuggling to connect to the mainframe.
      </h1>
      <h1 style={{ color: "white" }}>Wanna listen to some tunes?</h1>
      <Button
        onClick={() => setIsPlaying(!isPlaying)}
        style={{ marginRight: "0.5%" }}
        variant="outline-warning"
      >
        {!isPlaying ? "Play" : "Stop"}
      </Button>
      <Sound
        url={songToPlay}
        playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
        // onLoading={handleSongLoading}
        // onPlaying={handleSongFinishedPlaying}
        onFinishedPlaying={handleSongFinishedPlaying}
      />
    </div>
  );
}

export default Serverloading;
