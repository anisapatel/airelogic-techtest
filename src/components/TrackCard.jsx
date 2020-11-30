import React from "react";
import { Link } from "@reach/router";
import PropTypes from "prop-types";

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

//adds the prop type object to the class
TrackCard.propTypes = {
  track: PropTypes.object,
  artistData: PropTypes.string,
};
