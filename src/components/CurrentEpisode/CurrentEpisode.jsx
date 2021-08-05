import "./CurrentEpisode.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

function CurrentEpisode({ episode, getEpisodeById }) {
  let { id } = useParams();

  useEffect(() => {
    getEpisodeById(id);
    console.log(id);
  }, [id]);

  return (
    <div className="episode">
      <h3>{episode.name}</h3>
      <p>Дата выхода: {episode.air_date}</p>
      <p>Номер сезона: {episode.episode.slice(1, 3)} </p>
      <p>Номер эпизода: {episode.episode.slice(4, 6)} </p>
      <p>Персонажи</p>
    </div>
  );
}

export default CurrentEpisode;
