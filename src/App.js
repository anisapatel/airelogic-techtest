import logo from "./logo.svg";
import "./App.css";
import * as api from "./utils/Api";
import TrackList from "./components/TrackList";
import Search from "./components/Search";
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
        <TrackLyrics path="/tracks/:title" />
      </Router>
    </>
  );
}

export default App;
