import './App.css';
import apiEpisodes from "../../utils/EpisodesApi";
import { useState, useEffect } from "react";
import EpisodeList from "../EpisodeList/EpisodeList"

function App() {
    const [episodes, setEpisodes] = useState([]);
    const [episodesFirstSeason, setEpisodesFirstSeason] = useState([]);
    const [episodesSecondSeason, setEpisodesSecondSeason] = useState([]);
    const [episodesThirdSeason, setEpisodesThirdSeason] = useState([]);
    const [episodesFourthSeason, setEpisodesFourthSeason] = useState([]);

  useEffect(() => {
    apiEpisodes
      .getEpisodes()
      .then(([dataPageOne, dataPageTwo, dataPageThree]) => {
        console.log(dataPageOne, dataPageTwo, dataPageThree);
        const data = [...dataPageOne.results, ...dataPageTwo.results, ...dataPageThree.results];
        const dataFirstSeason = filterEpisodesBySeason(1, data);
        const dataSecondSeason = filterEpisodesBySeason(2, data);
        const dataThirdSeason = filterEpisodesBySeason(3, data);
        const dataFourSeason = filterEpisodesBySeason(4, data);
        setEpisodes([...dataPageOne.results, ...dataPageTwo.results, ...dataPageThree.results]);
        setEpisodesFirstSeason(dataFirstSeason);
        setEpisodesSecondSeason(dataSecondSeason);
        setEpisodesThirdSeason(dataThirdSeason);
        setEpisodesFourthSeason(dataFourSeason);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function filterEpisodesBySeason(numberSeason, episodesData) {
      return  episodesData.filter((episode) => episode.episode.includes(`S0${numberSeason}`))
  };

  return (
    <div className="app">
      <h1>Hello</h1>
      <p>1 сезон</p>
      <EpisodeList episodes={episodesFirstSeason}/>
      <p>2 сезон</p>
      <EpisodeList episodes={episodesSecondSeason}/>
      <p>3 сезон</p>
      <EpisodeList episodes={episodesThirdSeason}/>
      <p>4 сезон</p>
      <EpisodeList episodes={episodesFourthSeason}/>
    </div>
  );
}

export default App;
