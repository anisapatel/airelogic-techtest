import "./App.css";
import TrackList from "./components/TrackList";
import React from "react";
import Title from "./components/Title";
import TrackLyrics from "./components/TrackLyrics";
import { Router } from "@reach/router";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <>
      <Title />
      <Router>
        <TrackList path="/" />
        <TrackLyrics path="/tracks/:artist/:title" />
        <ErrorPage default />
      </Router>
    </>
  );
}

export default App;
