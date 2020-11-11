import React from "react";
import { Link } from "@reach/router";
const TrackCard = ({ track: { title, length } }) => {
  return (
    <div>
      <Link to={`/tracks/${title}`}>
        <p>{title}</p>
      </Link>
      <p>{(length / 60000).toFixed(2)}</p>
    </div>
  );
};

export default TrackCard;
