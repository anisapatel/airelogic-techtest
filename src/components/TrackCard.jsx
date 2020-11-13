import React from "react";
import { Link } from "@reach/router";

const TrackCard = ({ track, artistData }) => {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Link
        to={`/tracks/${track.title}`}
        state={{ artist: artistData.artistName }}
      >
        <h4>{track.title}</h4>
      </Link>
      <p>{(track.length / 60000).toFixed(2)}</p>
    </div>
  );
};

export default TrackCard;
