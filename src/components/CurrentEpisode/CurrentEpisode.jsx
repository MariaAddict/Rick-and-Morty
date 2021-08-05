import "./CurrentEpisode.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import CardCharacter from "../CardCharacter/CardCharacter";

function CurrentEpisode({ episode, getEpisodeById, charactersEpisode }) {
  let { id } = useParams();

  useEffect(() => {
    getEpisodeById(id);
    console.log(id);
  }, [id]);

  return (
    <div className="episode">
      <h3>{episode.name}</h3>
      <p>Дата выхода: {episode.air_date}</p>
      <p>Номер эпизода: {episode.episode} </p>
      <h4 className="episode__title-characters">Персонажи</h4>
      <ul className="characters">
        {charactersEpisode.map((character) => (
          <CardCharacter key={character.id} character={character} />
        ))}
      </ul>
    </div>
  );
}

export default CurrentEpisode;
