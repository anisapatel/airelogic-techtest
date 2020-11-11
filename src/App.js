import logo from "./logo.svg";
import "./App.css";
import TrackList from "./components/TrackList";
import TrackLyrics from "./components/TrackLyrics";
import { Router } from "@reach/router";

function App() {
  return (
    <main>
      <Router>
        <TrackList path="/" />
        <TrackLyrics path="/tracks/:title" />
      </Router>
    </main>
  );
}

export default App;
