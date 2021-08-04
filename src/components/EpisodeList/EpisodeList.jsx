import './EpisodeList.css';
import Episode from '../Episode/Episode';

function EpisodeList({episodes}) {
    return (
      <ul className="cards">
        {episodes.map((episode) => <Episode key={episode.name} episode={episode} />)}
      </ul>
    );
  }
  
  export default EpisodeList;