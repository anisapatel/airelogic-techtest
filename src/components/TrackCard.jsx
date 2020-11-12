import React, { useState } from "react";
import { Link } from "@reach/router";
import TrackLyrics from "./TrackLyrics";
const TrackCard = (props) => {
  const [isVisible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(!isVisible);
  };

  return (
    <div>
      {isVisible && (
        <TrackLyrics
          title={props.track.title}
          artist={props.artistData.artistName}
        />
      )}
      <div>
        <button onClick={handleClick}>
          <p>{props.track.title}</p>
        </button>

        <p>{(props.track.length / 60000).toFixed(2)}</p>
      </div>
    </div>
  );
};

export default TrackCard;
