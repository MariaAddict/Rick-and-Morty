import './App.css';
import apiEpisodes from "../../utils/EpisodesApi";
import { useEffect } from "react";

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
    </div>
  );
}

export default App;
