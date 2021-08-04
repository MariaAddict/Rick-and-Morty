import './App.css';
import apiEpisodes from "../../utils/EpisodesApi";
import { useState, useEffect } from "react";
import EpisodeList from "../EpisodeList/EpisodeList"

function App() {
    const [episodes, setEpisodes] = useState([]);
    
  useEffect(() => {
    apiEpisodes
      .getEpisodes()
      .then((data) => {
        console.log(data);
        setEpisodes(data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="app">
      <h1>Hello</h1>
      <EpisodeList episodes={episodes}/>
    </div>
  );
}

export default App;
