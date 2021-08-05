import "./CurrentEpisode.css";
import { useParams } from "react-router-dom";

function CurrentEpisode() {
  let { id } = useParams();

  return (
    <div className="episode">
      <h3>{id}</h3>
    </div>
  );
}

export default CurrentEpisode;
