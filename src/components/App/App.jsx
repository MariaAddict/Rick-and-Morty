import './App.css';
import apiEpisodes from "../../utils/EpisodesApi";
import { useEffect } from "react";
import EpisodeList from "../EpisodeList/EpisodeList"

function App() {
  useEffect(() => {
    apiEpisodes
      .getEpisodes()
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="app">
      <h1>Hello</h1>
      <EpisodeList />
    </div>
  );
}

export default App;
