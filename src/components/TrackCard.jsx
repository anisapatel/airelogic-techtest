import React from "react";
import { Link } from "@reach/router";

const TrackCard = ({ track, artistData }) => {
  // console.log(track, artistData, "<--a");
  return (
    <div className="content">
      <Link
        to={`/tracks/${artistData.artistName}/${track.title}`}
        className="content__link"
      >
        <p className="content__title">{track.title}</p>
      </Link>
    </div>
  );
};

export default TrackCard;
