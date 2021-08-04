import './Episode.css';

function Episode({episode}) {
    return (
      <li className="card">
             <h3>{episode.name}</h3>
             <p>Дата выхода: {episode.air_date}</p>
             <p>{episode.episode.slice(4, 6)} </p>
      </li>
    );
  }
  
  export default Episode;