import React, { useState } from "react";
import { Link } from "@reach/router";
import TrackLyrics from "./TrackLyrics";
const TrackCard = (props) => {
  const [isVisible, setVisible] = useState(false);

  const handleClick = (event) => {
    console.log(event.target.innerText);
    // props.getLyrics(text);
  };

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <div>
        <button onClick={() => props.getLyrics(props.tracks.title)}>
          {props.track.title}
        </button>
      </div>

      {/* <p>{(props.track.length / 60000).toFixed(2)}</p> */}

      {/* <div>
        <h2>Lyrics</h2>
        {isVisible && (
          <TrackLyrics
            title={props.track.title}
            artist={props.artistData.artistName}
          />
        )}
      </div> */}
    </div>
  );
};

export default TrackCard;
