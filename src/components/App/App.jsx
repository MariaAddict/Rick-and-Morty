import "./App.css";

import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import apiEpisodes from "../../utils/EpisodesApi";
import EpisodeList from "../EpisodeList/EpisodeList";
import SearchBlock from "../SearchBlock/SearchBlock";
import NotFoundBlock from "../NotFoundBlock/NotFoundBlock";
import CurrentEpisode from "../CurrentEpisode/CurrentEpisode";

function App() {
  const [episodes, setEpisodes] = useState([]);
  const [episodesFirstSeason, setEpisodesFirstSeason] = useState([]);
  const [episodesSecondSeason, setEpisodesSecondSeason] = useState([]);
  const [episodesThirdSeason, setEpisodesThirdSeason] = useState([]);
  const [episodesFourthSeason, setEpisodesFourthSeason] = useState([]);
  const [foundEpisodes, seyFoundEpisodes] = useState([]);
  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    apiEpisodes
      .getEpisodes()
      .then(([dataPageOne, dataPageTwo, dataPageThree]) => {
        console.log(dataPageOne, dataPageTwo, dataPageThree);
        const data = [
          ...dataPageOne.results,
          ...dataPageTwo.results,
          ...dataPageThree.results,
        ];
        const dataFirstSeason = filterEpisodesBySeason(1, data);
        const dataSecondSeason = filterEpisodesBySeason(2, data);
        const dataThirdSeason = filterEpisodesBySeason(3, data);
        const dataFourSeason = filterEpisodesBySeason(4, data);
        setEpisodes([
          ...dataPageOne.results,
          ...dataPageTwo.results,
          ...dataPageThree.results,
        ]);
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
    return episodesData.filter((episode) =>
      episode.episode.includes(`S0${numberSeason}`)
    );
  }

  function handleSubmitSearch(word) {
    setIsNotFound(false);
    if (word === "") {
      seyFoundEpisodes([]);
    } else {
      const foundEpisodesByWord = episodes.filter((item) =>
        item.name.toLowerCase().includes(word.toLowerCase())
      );
      if (foundEpisodesByWord.length === 0) {
        setIsNotFound(true);
      }
      seyFoundEpisodes(foundEpisodesByWord);
    }
  }

  return (
    <div className="app">
      <h1 className="app__title">Rick and Morty</h1>
      <Switch>
        <Route exact path="/">
          <SearchBlock onSubmit={handleSubmitSearch} />
          {foundEpisodes.length !== 0 && (
            <EpisodeList episodes={foundEpisodes} title="Найденные эпизоды" />
          )}
          {isNotFound && <NotFoundBlock />}
          <EpisodeList episodes={episodesFirstSeason} title="1 сезон" />
          <EpisodeList episodes={episodesSecondSeason} title="2 сезон" />
          <EpisodeList episodes={episodesThirdSeason} title="3 сезон" />
          <EpisodeList episodes={episodesFourthSeason} title="4 сезон" />
        </Route>
        <Route path="/episode/:id">
          <CurrentEpisode />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
