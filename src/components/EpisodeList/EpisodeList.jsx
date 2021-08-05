import "./EpisodeList.css";
import Episode from "../Episode/Episode";

function EpisodeList({ episodes, title }) {
  return (
    <section>
      <h4 className="episodes-list__title">{title}</h4>
      <ul className="cards">
        {episodes.map((episode) => (
          <Episode key={episode.name} episode={episode} />
        ))}
      </ul>
    </section>
  );
}

export default EpisodeList;
