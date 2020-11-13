import "./App.css";
import TrackList from "./components/TrackList";
import React, { useState } from "react";
import Title from "./components/Title";
import TrackLyrics from "./components/TrackLyrics";
import { Router } from "@reach/router";

function App() {
  return (
    <>
      <Title />
      <Router>
        <TrackList path="/" />
        <TrackLyrics path="/tracks/:artist/:title" />
      </Router>
    </>
  );
}

export default App;
