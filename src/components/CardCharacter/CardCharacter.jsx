import "./CardCharacter.css";

function CardCharacter({ character }) {
  return (
    <li className="character">
      <img src={character.image} alt={`photo ${character.name}`} className="character__image"/>
      <h3 className="character__name">{character.name}</h3>
      <p className="character__descriotion">status: {character.status}</p>
      <p className="character__descriotion">species: {character.species} </p>
      <p className="character__descriotion">gender: {character.gender} </p>
      <p className="character__descriotion">location: {character.location.name}</p>
    </li>
  );
}

export default CardCharacter;