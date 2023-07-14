async function getCharacter(id) {
  const result = await fetch(`http://34.125.193.171:8000/characters/${id}`);
  const { data } = await result.json();
  return data;
}

export default async function Detail({ params }) {
  const character = await getCharacter(params.id);
  
  return (
    <div className="character-container  flex justify-center items-center h-screen">
      <div
        key={character._id}
        className="character-card rounded-lg overflow-hidden text-white p-4 flex flex-col justify-between items-center transform transition-transform hover:scale-105"
      >
        <div className="text-center ">
          <h5 className="text-gray-400">{character._id}</h5>
          <h2 className="character-name">{character.name}</h2>
          <h5>Height: {character.height}</h5>
          <h5>Mass: {character.mass}</h5>
          <h5>Hair Color: {character.hair_color}</h5>
          <h5>Skin Color: {character.skin_color}</h5>
          <h5>Eye Color: {character.eye_color}</h5>
          <h5>Birth Year: {character.birth_year}</h5>
          <h5>Gender: {character.gender}</h5>
          <h5 className="film-info-label font-bold">Homeworld: {character.homeworld.name}</h5>
          <h5 className="film-info-label font-bold">Films:</h5>
          <ul className="character-title">
            {character.films.map((film) => (
              <li  key={film._id}>{film.title}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
