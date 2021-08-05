import "./Episode.css";
import { Link } from "react-router-dom";

function Episode({ episode }) {
  return (
    <li className="card">
      <Link to={`/episode/${episode.id}`} className="card__link">
        <h3>{episode.name}</h3>
        <p>Дата выхода: {episode.air_date}</p>
        <p>{episode.episode.slice(4, 6)} </p>
      </Link>
    </li>
  );
}

export default Episode;
